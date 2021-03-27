import { Page, refreshApp, Router } from "./framework/framework.js";
import BusinessPage from "./pages/business.js";
import ContactPage from "./pages/contact.js";
import ProjectPage from "./pages/project.js";


export class App {
  currentPage: Page | undefined;
  pages = [new BusinessPage(), new ProjectPage(), new ContactPage()];
  render: () => string;
  addEventListeners: () => void;
  slideInMain: () => void;
  constructor() {
    this.addEventListeners = () => {
      const buttons = document.getElementsByClassName("link") as HTMLCollectionOf<HTMLLinkButton>;
      Object.keys(buttons).forEach((o) => {
        const button = buttons[o] as HTMLLinkButton;
        button.addEventListener('click', e => {
          const button = e.currentTarget as HTMLLinkButton;
          const nextPage = this.pages.find(p => p.pageName.toString() === button.getAttribute("pageName")) as Page;
          Router.routeTo(this, nextPage);
          refreshApp(this);
          if (this.currentPage?.addEventListeners) this.currentPage.addEventListeners();
          setTimeout(() => {
            this.slideInMain()
          }, 10);
        })
      })
    }
    this.render = () => {
      return `
      <div id="app">
        <div id="layout">
        <header id="header">

        <nav id="navbar">
        ${this.pages.map(p => `
        <button pageName="${p.pageName}" class="link ${this.currentPage?.pageName == p.pageName ? "activeLink" : "unactiveLink"}">
          <img class="linkIcon" src=${p.linkIconAbsolutePath} alt="link to ${p.pageTitle}"/>
          <p class="linkLabel">Business Plan</p>
        </button>`).join('')}
  
        </nav>
        </header>
        <main class="mainAnimationBefore" id="main">
          <div id ="pageContainer">
          <div id="pageTitle">
            ${this.currentPage ? this.currentPage.pageTitle : ""}
          </div>
          <div id="pageContent">
            ${this.currentPage ? this.currentPage.render() : `
            <a href="/app.html">Link to App.html</a>
            `}
          </div>
         </div>
         </main>
         <footer id="footer">
         <div>
          <p>
            Anthon Wellsjö
          </p>
          </div>
          <div>
          <p>
            Fullstacking around the world
          </p>
          </div>
         </footer>
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
    this.slideInMain = () => {
      document.getElementById("main")?.classList.remove("mainAnimationBefore");
    }
  }
}