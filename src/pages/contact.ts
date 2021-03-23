import { Page } from '../framework/framework.js';

export default class ContactPage extends Page {
  constructor() {
    super({ pageTitle: "Contact" });
    this.render = () => `
    <h1>this is the contact page</h1>
    `;

  }
}