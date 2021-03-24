import { Page } from '../framework/framework.js';


export default class BusinessPage extends Page {
  constructor() {
    super({ pageTitle: "Affärsplan", pageName: PageName.business, linkIconAbsolutePath: "src/images/business.png" });
    this.render = () => `
    <p>
      En prototyp av produkten kommer att utvecklas innan några investeringar efterfrågas. På så sätt
      minskar vi riskerna med startkapitalet och kan göra användar-tester och förundersökningar innan lansering.
    </p>
    `;

  }
}