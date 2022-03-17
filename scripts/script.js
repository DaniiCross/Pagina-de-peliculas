import { tarjetaPelicula } from "../data/data.js";
import { cards } from "./modules/cards.js";

let contenedorCards = document.getElementById('contenedorCards');
//let titulo =document.getElementById('nombrePelicula').value

document.addEventListener('DOMContentLoaded', () => {

    cards(tarjetaPelicula,contenedorCards)
})