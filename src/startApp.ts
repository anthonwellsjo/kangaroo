import { App } from './app.js'
import { refreshApp } from './framework/framework.js';

const startApp = () => {
  console.log("starting");
  const app = new App();
  refreshApp(app);
}

window.onload = startApp;
