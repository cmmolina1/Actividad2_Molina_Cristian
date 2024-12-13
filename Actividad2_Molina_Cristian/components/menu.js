class Menu extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = `
        <style>
          nav {
            display: flex;
            gap: 15px;
            background: #333;
            padding: 10px;
          }
          a {
            color: white;
            text-decoration: none;
          }
        </style>
        <nav>
          <a href="#" data-page="profile">Perfil</a>
          <a href="#" data-page="table">Tabla</a>
          <a href="#" data-page="gallery">Galería</a>
        </nav>
      `;
      shadow.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const event = new CustomEvent('navigate', {
            detail: link.getAttribute('data-page')
          });
          this.dispatchEvent(event);
        });
      });
    }
  }
  customElements.define('app-menu', Menu);
  