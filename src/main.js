//import { organize } from './data.js'
import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js'; //trajimos la data en console log prueba #1
import {filterTypeWater, filterTypeBug, filterTypeDragon, filterTypeElectric, filterTypeGhost, filterTypeFire, filterTypeIce, filterTypeFighting, filterTypeGrass, filterTypeNormal, filterTypePsychic, filterTypeRock, filterTypeGround, filterTypeFlying, filterTypePoison} from './data.js'


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



let infoPokemon = Object.values(data.pokemon);


/// HISTORIA DE USUARIO VISUALIZAR LA DATA

function showData(infoPokemon) {
    for (let i = 0; i < infoPokemon.length; i++){

        //numero de pokemon
        let numberPokemon=infoPokemon[i].num;
    
        //imagen de pokemon
        let imagePokemon = infoPokemon[i].img;
       
        //nombre de pokemon
        let namePokemon = infoPokemon[i].name;

        //tipo de pokemon
        let typesPokemon=infoPokemon [i].type;

        let showBox = document.querySelector(".selectorBox");
        let createInfo = document.createElement("div");
        createInfo.classList.add("pokeCards");
        createInfo.onclick=("clickToImage");


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



/// FUNCIÓN FILTRAR POR TIPO DE POKEMON

function selectByType () {
  let selectOptions = document.getElementById("typesOfPokemon");
  let numberOfType = selectOptions.options[selectOptions.selectedIndex].value;
  numberOfType = parseInt(numberOfType);
  console.log(numberOfType);

  if(numberOfType === 0){
    showData(infoPokemon);
  } 
  
  else if(numberOfType === 1){
    //paso 1: fuiltrar data
    let applyFiltertypeWater = filterTypeWater(numberOfType, data.pokemon);
    //paso 2: pintarla
            let showBox = document.querySelector(".selectorBox");
            showBox.innerHTML = ""
            showData(applyFiltertypeWater);
  }

  else if(numberOfType === 2){
    let applyFiltertypeBug = filterTypeBug(numberOfType, data.pokemon);
            let showBox = document.querySelector(".selectorBox");
            showBox.innerHTML = ""
            showData(applyFiltertypeBug);
  }

  else if(numberOfType === 3){
    let applyFiltertypeDragon = filterTypeDragon(numberOfType, data.pokemon);
            let showBox = document.querySelector(".selectorBox");
            showBox.innerHTML = ""
            showData(applyFiltertypeDragon);
  }

  else if(numberOfType === 4){
    let applyFiltertypeElectric = filterTypeElectric(numberOfType, data.pokemon);
            let showBox = document.querySelector(".selectorBox");
            showBox.innerHTML = ""
            showData(applyFiltertypeElectric);
  }

  else if(numberOfType === 5){
    let applyFiltertypeGhost = filterTypeGhost(numberOfType, data.pokemon);
            let showBox = document.querySelector(".selectorBox");
            showBox.innerHTML = ""
            showData(applyFiltertypeGhost);
  }

  else if(numberOfType === 6){
    let applyFiltertypeFire = filterTypeFire(numberOfType, data.pokemon);
            let showBox = document.querySelector(".selectorBox");
            showBox.innerHTML = ""
            showData(applyFiltertypeFire);
  }

  else if(numberOfType === 7){
    let applyFiltertypeIce = filterTypeIce(numberOfType, data.pokemon);
            let showBox = document.querySelector(".selectorBox");
            showBox.innerHTML = ""
            showData(applyFiltertypeIce);
  }

  else if(numberOfType === 8){
    let applyFiltertypeFighting = filterTypeFighting(numberOfType, data.pokemon);
            let showBox = document.querySelector(".selectorBox");
            showBox.innerHTML = ""
            showData(applyFiltertypeFighting);
  }

  else if(numberOfType === 9){
    let applyFiltertypeNormal = filterTypeNormal(numberOfType, data.pokemon);
            let showBox = document.querySelector(".selectorBox");
            showBox.innerHTML = ""
            showData(applyFiltertypeNormal);
  }

  else if(numberOfType === 10){
    let applyFiltertypeGrass = filterTypeGrass(numberOfType, data.pokemon);
            let showBox = document.querySelector(".selectorBox");
            showBox.innerHTML = ""
            showData(applyFiltertypeGrass);
  }

  else if(numberOfType === 11){
    let applyFiltertypePsychic = filterTypePsychic(numberOfType, data.pokemon);
            let showBox = document.querySelector(".selectorBox");
            showBox.innerHTML = ""
            showData(applyFiltertypePsychic);
  }

  else if(numberOfType === 12){
    let applyFiltertypeRock = filterTypeRock(numberOfType, data.pokemon);
            let showBox = document.querySelector(".selectorBox");
            showBox.innerHTML = ""
            showData(applyFiltertypeRock);
  }

  else if(numberOfType === 13){
    let applyFiltertypeGround = filterTypeGround(numberOfType, data.pokemon);
            let showBox = document.querySelector(".selectorBox");
            showBox.innerHTML = ""
            showData(applyFiltertypeGround);
  }

  else if(numberOfType === 14){
    let applyFiltertypePoison = filterTypePoison(numberOfType, data.pokemon);
            let showBox = document.querySelector(".selectorBox");
            showBox.innerHTML = ""
            showData(applyFiltertypePoison);
  }

  else if(numberOfType === 15){
    let applyFiltertypeFlying = filterTypeFlying(numberOfType, data.pokemon);
            let showBox = document.querySelector(".selectorBox");
            showBox.innerHTML = ""
            showData(applyFiltertypeFlying);
  }

  }

document.getElementById("typesOfPokemon").addEventListener("change", selectByType);



/// MENU HAMBURGUESA


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



