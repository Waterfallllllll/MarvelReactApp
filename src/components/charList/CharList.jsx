import { Component } from "react";
import CharListItem from "../charListItem/CharListItem";
import MarvelService from "../../services/MarvelService";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

class CharList extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        items: [],
        loading: true,
        error: false,
    };

    marvelService = new MarvelService();

    componentDidMount() {
        this.listRequest();
    }

    listRequest = () => {
        this.marvelService
            .getAllCharacters()
            .then((items) => {
                this.setState({ items, loading: false });
            })
            .catch(this.onError);
    };

    onError = () => {
        this.setState({ loading: false, error: true });
    };

    renderCards = (data) => {
        const elements = data.map((item) => {
            if (item.id < 10) {
                const { id, ...props } = item;
                return (
                    <CharListItem
                        key={id}
                        {...props}
                        onClick={() => this.props.onCardSelected(id)}
                    />
                );
            }
        });

        return elements;
    };

    render() {
        let { loading, error } = this.state;

        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error)
            ? this.renderCards(this.state.items)
            : null;

        return (
            <div className="char__list">
                {errorMessage}
                {spinner}
                <ul className="char__grid">{content}</ul>

                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        );
    }
}

export default CharList;
