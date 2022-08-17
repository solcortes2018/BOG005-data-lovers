
import data from './data/pokemon/pokemon.js'; //trajimos la data en console log prueba #1


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
    document.getElementById("containerOne","containerThree").style.display = "none";
    document.getElementById("containerTwo").style.display = "block";
}

function changeViewTypesButton() {
    document.getElementById("containerOne","containerTwo").style.display = "none";
    document.getElementById("containerThree").style.display = "block";
}


console.log(data);

let infoPokemon = Object.values(data.pokemon);

function showData(infoPokemon) {
    for (let i = 0; i < infoPokemon.length; i++ ){
        let namePokemon = infoPokemon[i].name;
        let createNameForPokemon=document.createTextNode(namePokemon);
        ///console.log(namePokemon);
        let imagePokemon = infoPokemon[i].img;
        console.log(imagePokemon);
        ///let createImageForPokemon=document.createElement(imagePokemon);

        let showBox = document.querySelector(".selectorBox");
        let createInfo = document.createElement("div");

        showBox.appendChild(createInfo);
        createInfo.appendChild(createNameForPokemon);
       /// createInfo.appendChild(createImageForPokemon);
       
        
        
       // infoPokemon.innerHTML= `
       //         <img src= "${imagePokemon}"></img>
        ///<p>${namePokemon}</p>
       /// `
    }
}
window.addEventListener("load", showData(infoPokemon));