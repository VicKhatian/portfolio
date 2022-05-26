import "./App.css";

function App() {
  return (
    <div className="App">
      <body>
        <header>
          <h1>This is a header</h1>
          <nav>
            <ul>
              <li>
                <a href="#stealth">Link1</a>
              </li>

              <li>
                <a href="#combat">Link2</a>
              </li>

              <li>
                <a href="#weapons">Link3</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          This is main
          <section>Section about myself</section>
          <section>Section about my projects</section>
        </main>
      </body>
    </div>
  );
}

export default App;
