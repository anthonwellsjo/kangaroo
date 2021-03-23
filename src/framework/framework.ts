interface props {
  pageTitle: string
}

export class Page {
  pageTitle: string;
  constructor({ pageTitle }: props) {
    this.pageTitle = pageTitle;
  }
}