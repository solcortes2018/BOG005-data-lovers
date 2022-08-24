import { organize } from './data.js'
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

function showData(infoPokemon) {
    for (let i = 0; i < infoPokemon.length; i++ ){
        let namePokemon = infoPokemon[i].name;
        let createNameForPokemon=document.createTextNode(namePokemon);
        ///console.log(namePokemon);
        let imagePokemon = infoPokemon[i].img;
        console.log(imagePokemon);
        ///let createImageForPokemon= (document.createElement(`<img src= "${imagePokemon}"></img>`));
        let showBox = document.querySelector(".selectorBox");
        let createInfo = document.createElement("div");
      //numero de pokemon
        let numberPokemon=infoPokemon[i].num;
        let createNumberForPokemon=document.createTextNode(numberPokemon);
        console.log(numberPokemon);
        //tipo de pokemon
        let typesPokemon=infoPokemon [i].type;
        let createTypesForPokemon=document.createTextNode(typesPokemon);
        console.log(typesPokemon);

        showBox.appendChild(createInfo);
        createInfo.innerHTML=`
        <div class="stylePokemon">
        <img  src= "${imagePokemon}">
        <p id=numPokemon>${numberPokemon}</p>
        <p id=typesPokemon>${typesPokemon}</p>
        </div>`
        createInfo.appendChild(createNameForPokemon);
    }
}
window.addEventListener("load", showData(infoPokemon));

document.getSelection("div").addEventListener("click", function(){ 
}
)













































































































const toggleButton = document.getElementById('buttonMenu')
const navWrapper = document.getElementById('nav')

toggleButton.addEventListener('click',() => {
  toggleButton.classList.toggle('close')
  navWrapper.classList.toggle('show')
})

navWrapper.addEventListener('click',e => {
  if(e.target.id === 'nav'){
    navWrapper.classList.remove('show')
    toggleButton.classList.remove('close')
  }
})