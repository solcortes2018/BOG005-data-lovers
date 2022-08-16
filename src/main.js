//import {example} from './data.js';
import data from './data/pokemon/pokemon.js'; //trajimos la data en console log
let pokemon = Object.values(data.pokemon);

console.log(pokemon);

let beginning= document.getElementById ("beginning");
beginning.addEventListener ("click",changeViewBeginning);
let pokedexButton= document.getElementById("pokedexButton");
pokedexButton.addEventListener("click",changeViewPokedexButton);
let typesButton= document.getElementById("typesButton");
typesButton.addEventListener("click",changeViewTypesButton);

function changeViewBeginning() {
    document.getElementById("containerTwo","containerThree").style.display = "none";
    document.getElementById("containerOne").style.display = "block";
}


function changeViewPokedexButton() {
    document.getElementById("containerOne","containerTwo").style.display = "none";
    document.getElementById("containerThree").style.display = "block";
}

function changeViewTypesButton() {
    document.getElementById("containerOne","containerThree").style.display = "none";
    document.getElementById("containerTwo").style.display = "block";
}