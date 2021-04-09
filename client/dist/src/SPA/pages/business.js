import { Page } from '../framework/framework.js';
import img from "../../../../src/SPA/images/business.png";
const addEventListeners = () => {
    var _a;
    console.log("adding event handlers");
    (_a = document.getElementById("goToAppButton")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        console.log("click");
        window.location.href = "/app.html";
    });
};
export default class BusinessPage extends Page {
    constructor() {
        super({ pageTitle: "Affärsplan", pageName: 1 /* business */, slug: "#business", linkIconAbsolutePath: img, addEventListeners: addEventListeners });
        this.render = () => `
    <p>
      En prototyp av produkten kommer att utvecklas innan några investeringar efterfrågas. På så sätt
      minskar vi riskerna med startkapitalet och kan göra användar-tester och förundersökningar innan lansering.
    </p>
    <button id="goToAppButton">Gå till app</button>
    `;
    }
}
