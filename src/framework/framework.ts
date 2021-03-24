import { App } from "../app";

interface props {
  pageTitle: string,
  pageName: PageName | null,
  linkIconAbsolutePath?: string 
}

export class Page {
  pageTitle;
  pageName;
  linkIconAbsolutePath;
  render: () => string;
  constructor({ pageTitle, pageName, linkIconAbsolutePath }: props) {
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