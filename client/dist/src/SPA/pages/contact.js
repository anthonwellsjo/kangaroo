import { Page } from '../framework/framework.js';
import img from "../../../../src/SPA/images/contact.png";
export default class ContactPage extends Page {
    constructor() {
        super({ pageTitle: "Kontaktuppgifter", pageName: 3 /* contact */, slug: "#contact", linkIconAbsolutePath: img });
        this.render = () => `
    <p>Carl Anthon wellsjö</p>
    <p>tel. 3396479127</p>
    <p>Via Nicolo Da Pistoia 21</p>
    <p>00154 Rom</p>
    `;
    }
}
