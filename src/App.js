import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <body>
        <Navbar />
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
          <section id="myself">Section about myself</section>
          <section id="myprojects" tabindex="1">
            Section about my projects
          </section>
          <section>
            <legend>Sign up to receive emails</legend>
            <label for="email">Email:</label>
            <input type="text" id="email" name="email"></input>
            <fieldset>
              <input
                id="employer"
                type="radio"
                name="levels"
                value="employer"
              ></input>
              <label for="employer">I'm employer</label>
              <input
                id="fellow"
                type="radio"
                name="levels"
                value="fellow"
              ></input>
              <label for="fellow">I'm fellow programmer</label>
              <label for="input1">Enter a date:</label>
              <input type="date" id="input1" name="input1"></input>
            </fieldset>
            <input type="submit" name="submit" value="Submit"></input>
          </section>
        </main>
        <footer>&copy; 2022 Victoria Khatian</footer>
      </body>
    </div>
  );
}

export default App;
