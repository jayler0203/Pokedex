## Pasos para la realizacion de las pokemon cards:
1. #### Investigación de la API Pokémon:
   Leí la documentación de la API para poder saber qué atributos se obtienen de cada Pokémon y dónde están ubicados los que necesito.
2. #### Creación del Template de la Tarjeta:
   Copié la card de ejemplo en una variable de JS para convertirla en un template string.
   ```javascript
   const card = `<div class="pokemon" style="background-color: rgb(222,253,224);">
        <div class="img-container">
          <img src="https://pokeres.bastionbot.org/images/pokemon/1.png" alt="Bulbasaur">
        </div>
        <div class="info">
          <span class="number">001</span>
          <h3 class="name">Bulbasaur</h3>
          <small class="type">Type: <span>grass</span></small>
        </div>
      </div>`

   ```
3. #### Integración en la Página Web:
   Luego creé un div para colocar todo el contenido de la card y agregarlo al poke_container del HTML.
   ```javascript
   const poke_card = document.createElement("div");
   poke_card.innerHTML = card;
   poke_container.appendChild(poke_card);
   ```

4. ### Personalización de la Tarjeta Pokémon:
   Después cambié los valores estáticos por las propiedades equivalentes del parámetro de Pokémon.
   ```javascript
   const card = `<div class="pokemon" style="background-color:${colors[pokemon.types[0].type.name]} ;">
	  <div class="img-container">
	  <img src="${pokemon.sprites.other["official-artwork"]["front_default"]}" alt="Bulbasaur">
	  </div>
	  <div class="info">
	  <span class="number">#${agregarCeros(pokemon.id,3)}</span>
	  <h3 class="name">${pokemon.name}</h3>
	  <small class="type">Type: <span>${pokemon.types[0].type.name}</span></small>
  	</div>
    </div>`
   

  
   ```
   Para los números del Pokémon, creé una función que llena de ceros el string hasta tener una longitud deseada.
   ```javascript
   function agregarCeros(numero, longitud) {
	return String(numero).padStart(longitud, '0');
   }
   ```
   Y para los colores, accedí al objeto de colores según el tipo:  ``` colors[pokemon.types[0].type.name] ```
 
5. #### Definición de Variables Descriptivas:
   Finalmente, creé unas variables para cada atributo para que sea más fácil leer el template string.
   ```javascript
   let nombre = pokemon.name;
   let tipo = pokemon.types[0].type.name;
   let color = colors[tipo];
   let linkImagen = pokemon.sprites.other["official-artwork"]["front_default"];
   ```







   



