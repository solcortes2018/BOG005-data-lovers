// estas funciones son de ejemplo
 //FUNCION ORDEN ALFABETICO

export const organize = (data) => {
 
  let alphabeticalOrder = data.sort((a, b) => {
    if (a.namePokemon == b.namePokemon) {
      return 0;
    }
    if (a.namePokemon < b.namePokemon) {
      return -1;
    }
    return 1;
  });
  return alphabeticalOrder
 
};

