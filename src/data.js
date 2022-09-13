
import pokemon from './data/pokemon/pokemon.js'
import data from './data/pokemon/pokemon.js';


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

//funcion filtrar por tipo

export const filterByType = (data, typeFilter) => {
  const filterPokemon= data.filter(function (dataPokemon) {
    return (dataPokemon.type).includes(typeFilter)
  })
  //console.log(filterPokemon)
  return filterPokemon; 
}

//funcion filtrar por region

export const filterRegion = (data, regionFilter) => {
  const filterRegion = data.filter(function (dataPokemon) {
    return dataPokemon.generation.name === regionFilter;
  });

  return filterRegion;
}
//funcion para traer el pokemon mas pequeño 

export function smallPokemon (pokemones) {
  const pokelist= [...pokemones]
  pokelist.sort((pokex,pokey) => {
    if(pokex.size.height > pokey.size.height){
      return 1;
    } else {
       return -1;}      
  })
 // console.log(pokelist [0])
  return pokelist[0]
  
  
}

export const pokemonSmall = smallPokemon (pokemon.pokemon);
