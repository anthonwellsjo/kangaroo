import { Page } from '../framework/framework.js';
export default class ContactPage extends Page {
    constructor() {
        super({ pageTitle: "Kontaktuppgifter", pageName: 3 /* contact */, slug: "#contact", linkIconAbsolutePath: "src/SPA/images/contact.png" });
        this.render = () => `
    <p>Carl Anthon wellsjö</p>
    <p>tel. 3396479127</p>
    <p>Via Nicolo Da Pistoia 21</p>
    <p>00154 Rom</p>
    `;
    }
}
