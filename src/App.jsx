import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./components/Nav"
import Users from "./pages/Users"

function App() {
  return (
    <div>
      <Router>
        <Nav />
            <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:name" element={<Users />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
