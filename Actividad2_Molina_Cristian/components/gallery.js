class Gallery extends HTMLElement {
    async connectedCallback() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=6');
      const { results } = await response.json();
      this.innerHTML = `
        <div>
          ${results.map(pokemon => `<img src="https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg" alt="${pokemon.name}" />`).join('')}
        </div>
      `;
    }
  }
  customElements.define('gallery-page', Gallery);
  