class FooterElement extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <p>Copyright &copy; 2022 - <span class="brand-color">Find Foods</span> by Tegar Naufal Hanip</p>
    `;
  }
}

customElements.define('footer-element', FooterElement);
