let numPokedex = Math.floor(Math.random() * 152) + 1;

console.log(numPokedex)


const mostrarPokemon = async (pokemonName) => {
    try {
      const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const datos = await respuesta.json();

        const pokecard = document.querySelector(".pokeCard")
        const tipos = datos.types.map(type => `<h4 class="types"> + ${type.type.name}</h4>`).join("");

        pokecard.innerHTML = `
            <div class="container">
            <h1 class="name">${datos.name.toUpperCase()}</h1>
            <div>
            <img src="${datos.sprites.other.dream_world.front_default}" alt="${datos.name} Photo" class="image"/>
            </div>
            <h3 class="stats">STATS</h3>
            <div class="statsDiv">
            <h4>Height: ${datos.height * 10 / 100} M</h4>
            <h4>Weight: ${Math.round(datos.weight * 0.1)} KG</h4>
            </div>
            <h3 class="stats">TYPE</h3>
            <div class="statsDiv">
            ${tipos}
            </div>
            <div class="containerNum">
            <h2 class="pokedexNum">Pokedex Nº: ${numPokedex}</h2>
            </div>
            </div>

        `

    } catch (error) {
      console.error(error);
    }
  };
  
  mostrarPokemon(numPokedex); 