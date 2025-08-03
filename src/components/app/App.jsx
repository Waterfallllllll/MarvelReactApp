import { Component } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

import decoration from "../../resources/img/vision.png";

class App extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        selectedCard: null,
    };

    onCardSelected = (id) => {
        this.setState({ selectedCard: id });
    };

    render() {
        return (
            <div className="app">
                <AppHeader />
                <main>
                    <RandomChar />
                    <div className="char__content">
                        <CharList onCardSelected={this.onCardSelected} />
                        <CharInfo cardId={this.state.selectedCard} />
                    </div>
                    <img
                        className="bg-decoration"
                        src={decoration}
                        alt="vision"
                    />
                </main>
            </div>
        );
    }
}

export default App;
