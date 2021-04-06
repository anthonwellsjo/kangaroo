import { refreshApp, Router } from "./framework/framework.js";
import BusinessPage from "./pages/business.js";
import ContactPage from "./pages/contact.js";
import ProjectPage from "./pages/project.js";
export class App {
    constructor() {
        this.pages = [new BusinessPage(), new ProjectPage(), new ContactPage()];
        this.addEventListeners = () => {
            const buttons = document.getElementsByClassName("link");
            Object.keys(buttons).forEach((o) => {
                const button = buttons[o];
                button.addEventListener('click', e => {
                    var _a;
                    const button = e.currentTarget;
                    const nextPage = this.pages.find(p => p.pageName.toString() === button.getAttribute("pageName"));
                    Router.routeTo(this, nextPage);
                    refreshApp(this);
                    if ((_a = this.currentPage) === null || _a === void 0 ? void 0 : _a.addEventListeners)
                        this.currentPage.addEventListeners();
                    setTimeout(() => {
                        this.slideInMain();
                    }, 10);
                });
            });
        };
        this.render = () => {
            return `
      <div id="app">
        <div id="layout">
        <header id="header">

        <nav id="navbar">
        ${this.pages.map(p => {
                var _a, _b;
                return `
        <button ${((_a = this.currentPage) === null || _a === void 0 ? void 0 : _a.pageName) == p.pageName ? "disabled" : ""} pageName="${p.pageName}" class="link ${((_b = this.currentPage) === null || _b === void 0 ? void 0 : _b.pageName) == p.pageName ? "activeLink" : "unactiveLink"}">
          <img class="linkIcon" src=${p.linkIconAbsolutePath} alt="link to ${p.pageTitle}"/>
          <p class="linkLabel">Business Plan</p>
        </button>`;
            }).join('')}
  
        </nav>
        </header>
        <main class="mainAnimationBefore" id="main">
          <div id ="pageContainer">
          <div id="pageTitle">
            ${this.currentPage ? this.currentPage.pageTitle : ""}
          </div>
          <div id="pageContent">
            ${this.currentPage ? this.currentPage.render() : `
            <div id="emptyPageContainer">
              <a id="appLink" href="/app.html" data-link-alt="Klicka mig!"><span>Link till App.html</span></a>
            </div>
            `}
          </div>
         </div>
         </main>
         <footer id="footer">
          <div id="nameContainer">
            <div class="nCont">
              <p>
              Anthon Wellsjö
              </p>
            </div>
            <div class="nCont">
              <p>
              YTMWA0 Y0078
              </p>
            </div>
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
      `;
        };
        this.slideInMain = () => {
            var _a;
            (_a = document.getElementById("main")) === null || _a === void 0 ? void 0 : _a.classList.remove("mainAnimationBefore");
        };
    }
}
