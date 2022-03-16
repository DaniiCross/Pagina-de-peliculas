import { tarjetaPelicula } from "../data/data.js";
import { cards } from "./modules/cards.js";

let contenedorCards = document.getElementById('containerCards');


document.addEventListener('DOMContentLoaded', () => {

    cards(tarjetaPelicula,contenedorCards)
})