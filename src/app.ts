import { Page } from "./framework/framework.js";

export class App {
  currentPage: Page | undefined;
  render: () => string;
  constructor() {
    this.currentPage = undefined;
    this.render = () => {
      return `
      <div id="app">
        <div id="layout">
          <header id="header">
            <nav>
              <button class="link">Affärsplan</button>
              <button class="link">Projektidé</button>
              <button class="link">Kontakt</button>
            </nav>
          </header>
          <main id="main">
            ${this.currentPage?.render()}
          </main>
          <footer id="footer"></footer>
        </div>
      </div>
      `
    }
  }
}




