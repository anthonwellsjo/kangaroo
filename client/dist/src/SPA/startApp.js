import { App } from './app.js';
import { refreshApp, Router } from './framework/framework.js';
const startApp = () => {
    console.log("starting");
    const app = new App();
    Router.configure(app);
    refreshApp(app);
};
window.onload = startApp;
