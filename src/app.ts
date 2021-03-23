import { Page, refreshApp } from "./framework/framework.js";
import BusinessPage from "./pages/business.js";
import ContactPage from "./pages/contact.js";
import HomePage from "./pages/home.js";
import ProjectPage from "./pages/project.js";

enum PageName {
  home,
  business,
  project,
  contact
}


export class App {
  currentPage: Page | undefined;
  render: () => string;
  addEventListeners: () => void;
  constructor() {
    this.currentPage = new HomePage();
    this.addEventListeners = () => {
      const buttons = document.getElementsByClassName("link");
      Object.keys(buttons).forEach((o) => {
        const button = buttons[o] as HTMLButtonElement;
        switch (button.getAttribute("pageName")) {
          case PageName.business.toString(): {
            button.addEventListener('click', () => {
              this.currentPage = new BusinessPage();
              refreshApp(this);
            })
            break;
          }
          case PageName.contact.toString(): {
            button.addEventListener('click', () => {
              this.currentPage = new ContactPage();
              refreshApp(this);
            })
            break;
          }
          case PageName.home.toString(): {
            button.addEventListener('click', () => {
              this.currentPage = new HomePage();
              refreshApp(this);
            })
            break;
          }
          case PageName.project.toString(): {
            button.addEventListener('click', () => {
              this.currentPage = new ProjectPage();
              refreshApp(this);
            })
            break;
          }
        }
      })
    }
    this.render = () => {
      return `
      <div id="app">
        <div id="layout">
        <header id="header">
        <nav id="navbar">
        <button pageName="${PageName.business}" class="link"><img class="linkIcon" src="src/images/business.png" alt="business page"/></button>
        <button pageName="${PageName.project}" class="link"><img class="linkIcon" src="src/images/idea.png" alt="business page"/></button>
        <button pageName="${PageName.contact}" class="link"><img class="linkIcon" src="src/images/contact.png" alt="contact page"/></button>
        </nav>
        </header>
        <main id="main">
        ${this.currentPage?.render()}
        </main>
        <footer id="footer"></footer>
        <div id="bcg">
        <div id="bcg2"/>
        <div id="bcg1"/>
          <div id="bcg3"/>
          <div id="bcg4"/>
        </div>
        </div>
      </div>
      `


    }
  }
}




