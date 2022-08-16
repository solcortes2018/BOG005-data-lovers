
import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';

console.log(data);

//let html = "";

//data.forEach((Element)
//)

let infoPokemon = Object.values(data.pokemon);

function showData(data) {
    for (let i = 0; i < pokemon.length; i++){
        let namePokemon = pokemon[i].name;
        let imagePokemon = pokemon[i].img;
        console.log(imagePokemon);
        let showBox = document.querySelector("showBox");
        let info = document.createElement("div");
        showBox.appendChild(info)
        info.innerHTML= 
        `<img src= "${imagePokemon}"></img>
        <p>${namePokemon}</p>`
    }
}
window.addEventListener("load", showData(pokemon))


///const menuPokebook =  {
///    home: mainPage,
///    Pokedex: secondPage,
///    Types: thirdPage,
///}

///function mainPage (){
///    document.getElementById("homePage").style.display = "none";
///    document.getElementById("page2Pokedex").style.display="block";
///}

///document.getElementById("mainMenu").addEventListener("change", function(){
///    let stringmenu = document.menuForm.menu[document.menuForm.menu.selectedIndex].value;
///    stringmenu = parseInt(stringmenu);
///    console.log(stringmenu);
