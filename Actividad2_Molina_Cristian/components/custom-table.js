class CustomTable extends HTMLElement {
    async connectedCallback() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();
      this.innerHTML = `
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            ${users.map(user => `<tr><td>${user.name}</td><td>${user.email}</td></tr>`).join('')}
          </tbody>
        </table>
      `;
    }
  }
  customElements.define('custom-table', CustomTable);
  