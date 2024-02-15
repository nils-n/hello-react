import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import smallReactLogo from "./react-logo.png";

import "@fontsource-variable/montserrat";
import "./App.css";

function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={smallReactLogo} className="nav-logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <small>© 2021 Ziroll development. All rights reserved.</small>
    </footer>
  );
}

function MainContent() {
  return (
    <div className="main">
      <h1>Reasons I'm excited to learn React</h1>
      <ul className="styled-list">
        <li>
          It's a popular library, so I'll be able to fit in with the cool kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ul>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="main-layout">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
