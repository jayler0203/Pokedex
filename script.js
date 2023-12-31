const poke_container = document.getElementById("poke-container");
const pokemon_count = 150;
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

const main_types = Object.keys(colors);

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  console.log();
  createPokemonCard(data);
};
function agregarCeros(numero, longitud) {
	return String(numero).padStart(longitud, '0');
  }
  
const createPokemonCard = (pokemon) => {
  let nombre = pokemon.name;
  let tipo = pokemon.types[0].type.name;
  let color = colors[tipo];
  let linkImagen = pokemon.sprites.other["official-artwork"]["front_default"];

  const card = `<div class="pokemon" style="background-color:${color} ;">
	<div class="img-container">
	  <img src="${linkImagen}" alt="Bulbasaur">
	</div>
	<div class="info">
	  <span class="number">#${agregarCeros(pokemon.id,3)}</span>
	  <h3 class="name">${nombre}</h3>
	  <small class="type">Type: <span>${tipo}</span></small>
	</div>
  </div>`;
  const poke_card = document.createElement("div");
  poke_card.innerHTML = card;
  poke_container.appendChild(poke_card);
};

fetchPokemons();
