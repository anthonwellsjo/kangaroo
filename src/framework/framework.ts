import { App } from "../app";
import mainPage from "../pages/main";

interface props {
  pageTitle: string,
  pageName: PageName | null,
  slug: string,
  linkIconAbsolutePath?: string,
  addEventListeners?: () => void
}

export class Page {
  pageTitle;
  pageName;
  linkIconAbsolutePath;
  addEventListeners;
  slug;
  render: () => string;
  constructor({ pageTitle, pageName, slug, linkIconAbsolutePath, addEventListeners }: props) {
    this.addEventListeners = addEventListeners ? addEventListeners : undefined;
    this.pageTitle = pageTitle;
    this.pageName = pageName;
    this.slug = slug;
    this.linkIconAbsolutePath = linkIconAbsolutePath;
    this.render = () => "";
  }
}

export const refreshApp = (app: App) => {
  app.currentPage = app.pages.find(p => p.slug == window.location.hash);
  console.log("current Page", app.currentPage);
  document.body.innerHTML = app.render();
  app.addEventListeners();
  setTimeout(() => {
    app.slideInMain()
  }, 10);
}

export const Router = {
  routeTo: (app: App, nextPage: Page) => {
    history.pushState({ prevUrl: window.location.href }, nextPage.pageTitle, `/${nextPage.slug}`)
  },
  configure: (app: App) => {
    window.onpopstate = () => {
      refreshApp(app);
    }
  }
}