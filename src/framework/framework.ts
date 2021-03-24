import { App } from "../app";

interface props {
  pageTitle: string,
  pageName: PageName | null
}

export class Page {
  pageTitle;
  pageName;
  render: () => string;
  constructor({ pageTitle, pageName }: props) {
    this.pageTitle = pageTitle;
    this.pageName = pageName;
    this.render = () => "";
  }
}

export const refreshApp = (app: App) => {
  document.body.innerHTML = app.render();
  app.addEventListeners();
}