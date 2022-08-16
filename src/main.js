
<<<<<<< HEAD
import data from './data/pokemon/pokemon.js'; //trajimos la data en console log
let pokemon = Object.values(data.pokemon);

console.log(data);

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

import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';


console.log(data);

=======
import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';

console.log(data);

//let html = "";

//data.forEach((Element)
//)
>>>>>>> 1acc4eb6485f2d3275ca6680b3b9a7cc4296c220

let infoPokemon = Object.values(data.pokemon);

function showData(data) {
    for (let i = 0; i < pokemon.length; i++){
        let namePokemon = pokemon[i].name;
        let imagePokemon = pokemon[i].img;
        console.log(imagePokemon);
        let showBox = document.querySelector("showBox");
        let info = document.createElement("div");
<<<<<<< HEAD
        contenedor.appendChild(info)
        info.innerHTML= `
                <img src= "${imagenpokemon}"></img>
        <p>${namePokemon}</p>
        `
=======
        showBox.appendChild(info)
        info.innerHTML= 
        `<img src= "${imagePokemon}"></img>
        <p>${namePokemon}</p>`
>>>>>>> 1acc4eb6485f2d3275ca6680b3b9a7cc4296c220
    }
}
window.addEventListener("load", showData(pokemon))


///const menuPokebook =  {
///    home: mainPage,
///    Pokedex: secondPage,
///    Types: thirdPage,
///}

<<<<<<< HEAD
function mainPage (){
    document.getElementById("homePage").style.display = "none";
    document.getElementById("page2Pokedex").style.display="block";

}

document.getElementById("mainMenu").addEventListener("change", function(){
    let stringmenu = document.menuForm.menu[document.menuForm.menu.selectedIndex].value;
    stringmenu = parseInt(stringmenu);
    console.log(stringmenu);
})

=======
///function mainPage (){
///    document.getElementById("homePage").style.display = "none";
///    document.getElementById("page2Pokedex").style.display="block";
///}

///document.getElementById("mainMenu").addEventListener("change", function(){
///    let stringmenu = document.menuForm.menu[document.menuForm.menu.selectedIndex].value;
///    stringmenu = parseInt(stringmenu);
///    console.log(stringmenu);
>>>>>>> 1acc4eb6485f2d3275ca6680b3b9a7cc4296c220
