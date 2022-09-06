import pokemon from " ./data/pokemon/pokemon.js";
import pokemon from "./data/pokemon/pokemon.js";
import data from './data/pokemon/pokemon.js';
//A-Z//
export const sortDataA = (data) => {

  let dataOrder = [...data]
  dataOrder.sort((a, b) => {
    if (a.name == b.name) {
      return 0;
    } else if (a.name < b.name) {
      return -1;
    } else {
      return 1;

    }
    console.log (data);
  });
  return copydata
};
//Z-A//
export const sortDataZ = (data) => {
  let dataOrder = [...data]
  dataOrder.sort((a, b) => {
    if (a.name == b.name) {
      return 0;
    } else if (a.name > b.name) {
      return -1;
    } else {
      return 1;

    }
    
  });
  return copydata
};
