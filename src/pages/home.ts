import { Page } from '../framework/framework.js';

export default class HomePage extends Page {
  constructor() {
    super({ pageTitle: "Home", pageName: PageName.home });

  }
}