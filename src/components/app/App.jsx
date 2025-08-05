import { Component } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

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
                    <ErrorBoundary>
                        <RandomChar />
                    </ErrorBoundary>

                    <div className="char__content">
                        <ErrorBoundary>
                            <CharList onCardSelected={this.onCardSelected} />
                        </ErrorBoundary>

                        <ErrorBoundary>
                            <CharInfo cardId={this.state.selectedCard} />
                        </ErrorBoundary>
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
