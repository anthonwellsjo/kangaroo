import { Page } from '../framework/framework.js';
import img from "../../../../src/SPA/images/idea.png";
export default class ProjectPage extends Page {
    constructor() {
        super({ pageTitle: "Projektidé", pageName: 2 /* project */, slug: "#project", linkIconAbsolutePath: img });
        this.render = () => `
    <div style="width: 100%; text-align: center;">
    <img src="src/SPA/images/huvud.jpg" alt="barn och förälder" style="height: 150px;"/>
    </div>
    <p>Min produkt är en webbapplikation som samlar all användbar information för 
    föräldrar på en och samma plats, alltid relevant till deras barns ålder, och 
    platsen de bor på (lokala regler för vaccin osv.). 
    <br/>
    <br/>
    Genom att vägleda användaren i sitt föräldraskap så kan han/hon kan bli en 
    bättre förälder och lätta på den psykologiska press som man behöver utstå i 
    det virrvarr av information och obligationer som föräldralivet innebär.
    <br/>
    <br/>
    Applikationen kommer ha två huvudfunktioner:
    <ol>
      <li>Man ska kunna bläddra och läsa ett urval av sammanfattade vetenskapsartiklar.</li>
      <li>Ett notissystem kommer hålla koll på och informera användaren om obligationer, läkarbesök, vaccinationer, etc.</li>
    </ol>
    </p>
    
    `;
    }
}
