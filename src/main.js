
import data from './data/pokemon/pokemon.js'; //trajimos la data en console log prueba #1


//console.log(pokemon);//

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

const dataPoke = POKEMON.pokemon;
// Mostrando con template
const template = (list) => {
  let templateListPoke = '';
  // recorremos nuestro array con forEach
  list.forEach((dataPoke) => {
    // creamos un template(string) por cada elemento del array
    const card = `
      <div class='card-link'>
        <article class='blog-card'>
          <img class='post-image' src='${dataPoke.img}' />
          <h3 class='post-id'>${dataPoke.id}</h3>
          <div class='article-details'>
            <h4 class='post-title'>${dataPoke.name}</h4>
            <h6 class='post-category'>${dataPoke.type}</h6>
          </div>
        </article>
      </div>
    `;
    templateListPoke += card;
  });
  document.getElementById('targetPokemon').innerHTML = templateListPoke;
};
template(dataPoke);
//console.log(data);

//let infoPokemon = Object.values(data.pokemon);

/*function showData(infoPokemon) {
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
        createInfo.appendChild(createNameForPokemon);//
       /// createInfo.appendChild(createImageForPokemon);
       
        
        
       // infoPokemon.innerHTML= `
       //         <img src= "${imagePokemon}"></img>
        ///<p>${namePokemon}</p>
       /// `
    }
}*/
