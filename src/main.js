
//import { organize } from './data.js'
import pokemon from './data/pokemon/pokemon.js'
import data from './data/pokemon/pokemon.js'; //trajimos la data en console log prueba #1
import {sortHeavier, sortLighter, pokemonSmall, filterRegion, sortDataZ, sortDataA,filterByType } from './data.js'


let beginning = document.getElementById("beginning");
beginning.addEventListener("click", changeViewBeginning);

let pokedexButton = document.getElementById("pokedexButton");
pokedexButton.addEventListener("click", changeViewPokedexButton);

let pokedexButtonHome = document.getElementById("enterHere");
pokedexButtonHome.addEventListener("click", changeViewPokedexButton);

function changeViewBeginning() {
  document.getElementById("containerTwo").style.display = "none";
  document.getElementById("containerOne").style.display = "block";
}

function changeViewPokedexButton() {
  document.getElementById("containerOne").style.display = "none";
  document.getElementById("containerTwo").style.display = "block";
  showData(infoPokemon)
}


let infoPokemon = Object.values(data.pokemon);


/// HISTORIA DE USUARIO VISUALIZAR LA DATA

function showData(infoPokemon) {
  for (let i = 0; i < infoPokemon.length; i++) {

    //numero de pokemon
    let numberPokemon = infoPokemon[i].num;

    //imagen de pokemon
    let imagePokemon = infoPokemon[i].img;

    //nombre de pokemon
    let namePokemon = infoPokemon[i].name;

    //tipo de pokemon
    let typesPokemon = infoPokemon[i].type;

    //region del pokemon
    let theRegionPokemon = infoPokemon[i].generation.name;

    //tamaño del pokemon=
    let sizePokemon = infoPokemon[i].size.height;


    let showBox = document.querySelector(".selectorBox");
    let createInfo = document.createElement("div");
    createInfo.classList.add("pokeCards");
    createInfo.onclick = ("clickToImage");


    showBox.appendChild(createInfo);
    createInfo.innerHTML = `
        <p id=numPokemon>${numberPokemon}</p>
        <div class="styleForImageContainer">
        <img  src= "${imagePokemon}">
        </div>
        <p id=namePokemon>${namePokemon}</p>
        <p id=typesPokemon>${typesPokemon}</p>
        <p id=theRegionPokemon>${theRegionPokemon}</p>
        <p id=sizePokemon>${sizePokemon}</p>
        `
  }
}




window.addEventListener("load", showData(infoPokemon));

/// MENU HAMBURGUESA

const toggleButton = document.getElementById('buttonMenu')
const navWrapper = document.getElementById('nav')

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('close')
  navWrapper.classList.toggle('show')
});

navWrapper.addEventListener('click', e => {
  if (e.target.id === 'nav') {
    navWrapper.classList.remove('show')
    toggleButton.classList.remove('close')
  }
});

///

//mostarar funcion ordenar

orderDataName()

function orderDataName() {
  let orderPokemon = document.getElementById("orderOfPokemon")
  orderPokemon.addEventListener("change", () => {
    // console.log(orderPokemon.value);

    let organizedData
    let sortValue = orderPokemon.value

    if (sortValue == "orderAz") {
      organizedData = sortDataA(data.pokemon);
    } else if (sortValue == "orderZa") {
      organizedData = sortDataZ(data.pokemon);
    } else {
      organizedData = data.pokemon
    }

    console.log(organizedData);

    const showBoxOne = document.querySelector(".selectorBox");
    showBoxOne.innerHTML = ""
    showData(organizedData);

  });
}

//mostrar funcion filtrar por region

showRegionFilter()

function showRegionFilter() {
  let optionRegion = document.getElementById("regionOfPokemon")
  optionRegion.addEventListener("change", (event) => {
    let selectRegion = event.target.value;
    if (selectRegion == "regionOfPokemon") {
      showData(data.pokemon);
    } else {
      let arrayFilter = filterRegion(data.pokemon, selectRegion);

      const showBoxTwo = document.querySelector(".selectorBox");
      showBoxTwo.innerHTML = ""
      showData(arrayFilter);



    }
  });
}

// mostrar el pokemon mas pequeño

const funFactOne = document.getElementById("typesButton");
funFactOne.addEventListener("click", () => {

  document.querySelector(".selectorBox").innerHTML = "";
  showData([pokemonSmall]);

  document.getElementById("containerOne").style.display = "none";
  document.getElementById("containerTwo").style.display = "block";
});

//mostrar tipos de pokemon 

function filterTypeofPokemon() {
  let optionType = document.getElementById("typesOfPokemon");
  optionType.addEventListener("change", (event) => {
    
    let selectType = event.target.value;

    if (selectType == "pokemonTypes") {
      showData(data.pokemon);
    } else if (selectType == 0 || selectType == null) {
      showData(data.pokemon);
    } else {
      let arrayType = filterByType(data.pokemon,selectType)
    
      const showBoxThree = document.querySelector(".selectorBox");
      showBoxThree.innerHTML = ""
      showData(arrayType);
    }
   
  });
}
filterTypeofPokemon()


window.addEventListener("load", showData(infoPokemon));



// Ordenar por Peso

orderWeight()

function orderWeight() {
  let orderPokemonWeight = document.getElementById("orderForWeight")
  orderPokemonWeight.addEventListener("change", () => {

    let organizedData
    let sortValue = orderPokemonWeight.value

    if (sortValue == "orderbyHigher") {
      organizedData = sortHeavier(data.pokemon);
      console.log(organizedData);
    } else if (sortValue == "orderbyMinor") {
      organizedData = sortLighter(data.pokemon);
    } else {
      organizedData = data.pokemon
    }

    const showBoxOne = document.querySelector(".selectorBox");
    showBoxOne.innerHTML = ""
    showData(organizedData);

  });
}
