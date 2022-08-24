
import data from './data/pokemon/pokemon.js'; //trajimos la data en console log prueba #1


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
console.log(infoPokemon);

function showData(infoPokemon) {
    for (let i = 0; i < infoPokemon.length; i++ ){

        //numero de pokemon
        let numberPokemon=infoPokemon[i].num;
        console.log(i);
    
        //imagen de pokemon
        let imagePokemon = infoPokemon[i].img;
       
        //nombre de pokemon
        let namePokemon = infoPokemon[i].name;

        //tipo de pokemon
        let typesPokemon=infoPokemon [i].type;

        let showBox = document.querySelector(".selectorBox");
        let createInfo = document.createElement("div");
        createInfo.classList.add("pokeCards");


        showBox.appendChild(createInfo);
        createInfo.innerHTML=`
        <p id=numPokemon>${numberPokemon}</p>
        <div class="styleForImageContainer">
        <img  src= "${imagePokemon}">
        </div>
        <p id=namePokemon>${namePokemon}</p>
        <p id=typesPokemon>${typesPokemon}</p>
        `
    }
}
window.addEventListener("load", showData(infoPokemon));



