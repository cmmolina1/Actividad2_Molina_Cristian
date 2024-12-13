class Header extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = `
        <style>
          h1 {
            font-size: 2rem;
            color: #333;
            text-align: center;
          }
        </style>
        <header>
          <h1>Mi Aplicación Web</h1>
        </header>
      `;
    }
  }
  customElements.define('app-header', Header);
  