class SocialProfile extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <h2>Perfil de Usuario</h2>
        <p>Nombre: Juan Pérez</p>
        <p>Email: juan.perez@example.com</p>
      `;
    }
  }
  customElements.define('social-profile', SocialProfile);
  