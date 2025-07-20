import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app/App";
import MarvelService from "./services/MarvelService";

import "./style/style.scss";

const marvelService = new MarvelService();

marvelService.getAllCharacters().then((res) => console.log(res));
marvelService.getCharacter(5).then((res) => console.log(res));

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
