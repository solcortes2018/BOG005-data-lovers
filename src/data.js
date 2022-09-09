
import pokemon from './data/pokemon/pokemon.js'
import data from './data/pokemon/pokemon.js';
let infoPokemon = Object.values(data.pokemon);

export const filterTypeWater = (data) => {
  console.log(data);
  const onlyWater = data.filter(function (el) {
    return (el.type).includes("water");
  })
  console.log(onlyWater);
  return onlyWater;
}

export const filterTypeBug = (data) => {
  const onlyBug = data.filter(function (el) {

    return el.type.includes("bug");
  })
  console.log(onlyBug);
  return onlyBug;
}

export const filterTypeDragon = (typesfilter, data) => {
  const onlyDragon = infoPokemon.filter(function (el) {
    return el.type.includes("dragon");
  })
  console.log(onlyDragon);
  return onlyDragon;
}

export const filterTypeElectric = (typesfilter, data) => {
  const onlyElectric = infoPokemon.filter(function (el) {
    return el.type.includes("electric");
  })
  console.log(onlyElectric);
  return onlyElectric;
}

export const filterTypeGhost = (typesfilter, data) => {
  const onlyGhost = infoPokemon.filter(function (el) {
    return el.type.includes("ghost");
  })
  console.log(onlyGhost);
  return onlyGhost;
}

export const filterTypeFire = (typesfilter, data) => {
  const onlyFire = infoPokemon.filter(function (el) {
    return el.type.includes("fire");
  })
  console.log(onlyFire);
  return onlyFire;
}

export const filterTypeIce = (typesfilter, data) => {
  const onlyIce = infoPokemon.filter(function (el) {
    return el.type.includes("ice");
  })
  console.log(onlyIce);
  return onlyIce;
}

export const filterTypeFighting = (typesfilter, data) => {
  const onlyFighting = infoPokemon.filter(function (el) {
    return el.type.includes("fighting");
  })
  console.log(onlyFighting);
  return onlyFighting;
}

export const filterTypeNormal = (typesfilter, data) => {
  const onlyNormal = infoPokemon.filter(function (el) {
    return el.type.includes("normal");
  })
  console.log(onlyNormal);
  return onlyNormal;
}

export const filterTypeGrass = (typesfilter, data) => {
  const onlyGrass = infoPokemon.filter(function (el) {
    return el.type.includes("grass");
  })
  console.log(onlyGrass);
  return onlyGrass;
}

export const filterTypePsychic = (typesfilter, data) => {
  const onlyPsychic = infoPokemon.filter(function (el) {
    return el.type.includes("psychic");
  })
  console.log(onlyPsychic);
  return onlyPsychic;
}

export const filterTypeRock = (typesfilter, data) => {
  const onlyRock = infoPokemon.filter(function (el) {
    return el.type.includes("rock");
  })
  console.log(onlyRock);
  return onlyRock;
}

export const filterTypeGround = (typesfilter, data) => {
  const onlyGround = infoPokemon.filter(function (el) {
    return el.type.includes("ground");
  })
  console.log(onlyGround);
  return onlyGround;
}

export const filterTypePoison = (typesfilter, data) => {
  const onlyPoison = infoPokemon.filter(function (el) {
    return el.type.includes("poison");
  })
  console.log(onlyPoison);
  return onlyPoison;
}

export const filterTypeFlying = (typesfilter, data) => {
  const onlyFlying = infoPokemon.filter(function (el) {
    return el.type.includes("flying");
  })
  console.log(onlyFlying);
  return onlyFlying;
}

//let touchCards = document.getElementsByClassName("pokeCards");
//console.log(touchCards);

//for (let i = 0; i < infoPokemon.length; i++) {
//  pokeCards.addEventListener("click", function showInfoByPokemon(){
//  document.getElementById("visualizator").innerHTML= `
//  <div id="styleForDataContainer">
//  <p id=numPokemon>"Pokemones123"</p>
//  <p id=namePokemon>${namePokemon}</p>
//  <p id=typesPokemon>${typesPokemon}</p>

//  </div>

//  <div class="styleForImageContainer">
//  <img  src= "${imagePokemon}">
//  </div>
//  <div id="styleForDataContainer2">
//  </div>`
//})}

//funcion ordenar alfabeticamente
export const sortDataA = (data) => {
  let dataOrder = [...data]
  // console.log(data)
  dataOrder.sort((a, b) => {
    if (a.name == b.name) {
      return 0;
    } else if (a.name < b.name) {
      return -1;
    } else {
      return 1;
    }
  });
  return dataOrder
};

export const sortDataZ = (data) => {
  let dataOrder = [...data];
  dataOrder.sort((a, b) => {
    if (a.name == b.name) {
      return 0;
    } else if (a.name > b.name) {
      return -1;
    } else {
      return 1;
    }

  });
  return dataOrder;
};

//funcion filtrar por region

export const filterByType = (data, typeFilter) => {
  return data.filter(function (datapokemon) {
    if(datapokemon.type.includes(typeFilter)){
      return true;
    } else{
      return false;
    }
  })
}

export const filterRegion = (data, regionFilter) => {
  const filterRegion = data.filter(function (datapokemon) {
    return datapokemon.generation.name === regionFilter;
  });

  return filterRegion;
}
