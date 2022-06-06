import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";

function App() {
  return (
    <div className="app">
      <Router>
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="*" element={<Error />} />
        </Routes>
        <div> Foooter </div>
      </Router>
    </div>
  );
}

export default App;
