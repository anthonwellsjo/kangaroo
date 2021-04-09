import { Page } from '../framework/framework.js';

const addEventListeners = () => {
  console.log("adding event handlers");
  document.getElementById("goToAppButton")?.addEventListener('click', () => {
    console.log("click");
    window.location.href = "/app.html";
  })
}


export default class BusinessPage extends Page {
  constructor() {
    super({ pageTitle: "Affärsplan", pageName: PageName.business, slug: "#business", linkIconAbsolutePath: "src/SPA/images/business.png", addEventListeners: addEventListeners });
    this.render = () => `
    <p>
      En prototyp av produkten kommer att utvecklas innan några investeringar efterfrågas. På så sätt
      minskar vi riskerna med startkapitalet och kan göra användar-tester och förundersökningar innan lansering.
    </p>
    <button id="goToAppButton">Gå till app</button>
    `;
  }
}