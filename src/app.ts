import { Page, refreshApp } from "./framework/framework.js";
import BusinessPage from "./pages/business.js";
import ContactPage from "./pages/contact.js";
import HomePage from "./pages/home.js";
import ProjectPage from "./pages/project.js";


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
      console.log(this.currentPage?.pageName)
      return `
      <div id="app">
        <div id="layout">
        <header id="header">
        <nav id="navbar">
        <button pageName="${PageName.business}" class="link ${this.currentPage?.pageName == PageName.business ? "active" : ""}">
          <img class="linkIcon" src="src/images/business.png" alt="business page"/>
          <p class="linkLabel">Business Plan</p>
        </button>
        <button pageName="${PageName.project}" class="link ${this.currentPage?.pageName == PageName.project ? "active" : ""}">
          <img class="linkIcon" src="src/images/idea.png" alt="project page"/>
          <p class="linkLabel">Project Idea</p>
        </button>
        <button pageName="${PageName.contact}" class="link ${this.currentPage?.pageName == PageName.contact ? "active" : ""}">
          <img class="linkIcon" src="src/images/contact.png" alt="contact page"/>
          <p class="linkLabel">Contact Page</p>
        </button>
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




