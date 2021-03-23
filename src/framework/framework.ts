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