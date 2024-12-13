class Footer extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = `
        <style>
          footer {
            text-align: center;
            padding: 10px;
            background: #333;
            color: white;
          }
        </style>
        <footer>
          <p>&copy; 2024 Aplicación Web - Cristian Molina. Todos los derechos reservados.</p>
        </footer>
      `;
    }
  }
  customElements.define('app-footer', Footer);
  