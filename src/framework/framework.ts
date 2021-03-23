import { App } from "../app";

interface props {
  pageTitle: string
}

export class Page {
  pageTitle: string;
  render: () => string;
  constructor({ pageTitle }: props) {
    this.pageTitle = pageTitle;
    this.render = () => "";
  }
}

export const refreshApp = (app: App) => {
  document.body.innerHTML = app.render();
  app.addEventListeners();
}