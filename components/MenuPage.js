export class MenuPage extends HTMLElement {
  constructor() {
    super();
    
    // creates a shadow dom to keep the component encapsulation
    this.root = this.attachShadow({ mode: 'open' });

    // imports css using fetch
    const style = document.createElement('style');
    this.root.appendChild(style);
    async function loadCSS() {
      const response = await fetch('./components/MenuPage.css');
      const css = await response.text();
      style.textContent = css;
    }
    loadCSS();
  }

  // called each time the element is added to the document
  connectedCallback() {
    const template = document.getElementById("menu-page-template");
    // I need to clone the node inside the template, so then I can use the content inside the template
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);
  }
}

customElements.define('menu-page', MenuPage);