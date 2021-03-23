import { App } from './app.js'

const startApp = () => {
  console.log("starting");
  const app = new App();
  document.body.innerHTML = app.render();
}

window.onload = startApp;
