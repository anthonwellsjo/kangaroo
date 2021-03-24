import { Page } from '../framework/framework.js';

export default class ProjectPage extends Page {
  constructor() {
    super({ pageTitle: "Project Idea", pageName: PageName.project });
    this.render = () => `
    <p>this is the project page</p>
    `;

  }
}