class App {
  constructor() {
  }

  render = () => {
    return `
    <div id="app">
      <header>
        <nav>
          <button>Affärsplan</button>
          <button>Projektidé</button>
          <button>Kontakt</button>
        </nav>
      </header>
      <main id="main"></main>
      <footer id="footer"></footer>
    </div>
    `
  }
}

const startApp = () => {
  document.body.innerHTML = `<h1>app working</h1>`;
  console.log("starting");
}


window.onload = startApp;


