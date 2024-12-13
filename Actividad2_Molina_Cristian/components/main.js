class Main extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = `
        <style>
          section {
            padding: 20px;
          }
        </style>
        <section>
          <slot></slot>
        </section>
      `;
    }
  }
  customElements.define('app-main', Main);
  