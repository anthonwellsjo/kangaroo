import { Page } from '../framework/framework.js';

export default class BusinessPage extends Page {
  constructor() {
    super({ pageTitle: "Business Plan" });
    this.render = () => `<h1>this is the business page</h1>
    `;

  }
}