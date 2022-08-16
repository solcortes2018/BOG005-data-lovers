//import { example } from './data.js';
// import data from './data/lol/lol.js';
import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(data);

//let html = "";

//data.forEach((Element)
//)

let infoPokemon = Object.values(data.pokemon);

function showData(datos) {
    for (let i = 0; i < pokemon.length; i++){
        let namePokemon = pokemon[i].name;
        let imagenPokemon = pokemon[i].img;
        let contenedor = document.querySelector(".contenedor");
        let info = document.createElement("div");
        contenedor.appendChild(info)
        info.innerHTML= `
                <img src= "${imagenpokemon}"></img>
        <p>${namePokemon}</p>
        `
        
  //      
    }
}
window.addEventListener("load",showData(pokemon));


const menuPokebook =  {
///    home: mainPage,
///    Pokedex: secondPage,
///    Types: thirdPage,
}

function mainPage (){
    document.getElementById("homePage").style.display = "none";
    document.getElementById("page2Pokedex").style.display="block";

}
///const secondPage = function (){
///    document.getElementById("homePage").style.display = "none";
///    document.getElementById("page2Pokedex").style.display="block";
///}
///const mainPage = function (){
///    document.getElementById("homePage").style.display = "none";
///    document.getElementById("page2Pokedex").style.display="block";
///};

document.getElementById("mainMenu").addEventListener("change", function(){
    let stringmenu = document.menuForm.menu[document.menuForm.menu.selectedIndex].value;
    stringmenu = parseInt(stringmenu);
    console.log(stringmenu);
    
///    for (i = 0; i<menuPokebook.length; i++){
///        let positionInObject = 
///}


///    if () {
///    document.getElementById("homePage").style.display = "none";
///    document.getElementById("page2Pokedex").style.display="block";
})