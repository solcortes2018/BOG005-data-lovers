import data from './data/pokemon/pokemon.js'; //trajimos la data en console log

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
    document.getElementById("containerOne","containerThree").style.display = "none";
    document.getElementById("containerTwo").style.display = "block";
}

function changeViewTypesButton() {
    document.getElementById("containerOne","containerTwo").style.display = "none";
    document.getElementById("containerThree").style.display = "block";
}


console.log(data);

let infoPokemon = Object.values(data.pokemon);

function showData(data) {
    for (let i = 0; i < pokemon.length; i++){
        let namePokemon = pokemon[i].name;
        let imagePokemon = pokemon[i].img;
        console.log(imagePokemon);
        let showBox = document.querySelector("showBox");
        let info = document.createElement("div");
        contenedor.appendChild(info)
        info.innerHTML= `
                <img src= "${imagenpokemon}"></img>
        <p>${namePokemon}</p>
        `
    }
}
window.addEventListener("load", showData(pokemon))


function mainPage (){
    document.getElementById("homePage").style.display = "none";
    document.getElementById("page2Pokedex").style.display="block";

}

document.getElementById("mainMenu").addEventListener("change", function(){
    let stringmenu = document.menuForm.menu[document.menuForm.menu.selectedIndex].value;
    stringmenu = parseInt(stringmenu);
    console.log(stringmenu);
})