import { App } from "../app";

interface props {
  pageTitle: string,
  pageName: PageName | null,
  linkIconAbsolutePath?: string,
  addEventListeners?: () => void
}

export class Page {
  pageTitle;
  pageName;
  linkIconAbsolutePath;
  addEventListeners;
  render: () => string;
  constructor({ pageTitle, pageName, linkIconAbsolutePath, addEventListeners }: props) {
    this.addEventListeners = addEventListeners ? addEventListeners : undefined;
    this.pageTitle = pageTitle;
    this.pageName = pageName;
    this.linkIconAbsolutePath = linkIconAbsolutePath;
    this.render = () => "";
  }
}

export const refreshApp = (app: App) => {
  document.body.innerHTML = app.render();
  app.addEventListeners();
}