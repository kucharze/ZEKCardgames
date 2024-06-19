import "./App.css";
import logo from "./Images/cards11.jpg";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Accounts from "./pages/Accounts/Accounts";
import GameNavbar from "./components/Navbar/GameNavbar";
import Suggestions from "./pages/Suggestions/Suggestions";
import Leaderboards from "./pages/Leaderboards/Leaderboards";
import CrazyEights from "./pages/Games/CrazyEights/CrazyEights";
import Blackjack from "./pages/Games/Blackjack/Blackjack";
import SnipSnapSnorum from "./pages/Games/SnipSnapSnorum/SnipSnapSnorum";
import Matching from "./pages/Games/Matching/Matching";
import GoFish from "./pages/Games/GoFish/GoFish";
import SpiderSolitare from "./pages/Games/SpiderSolitare/SpiderSolitare";
import War from "./pages/Games/War/War";
import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [darkmode, setDarkmode] = useState("darkmode");

  useEffect(() => {
    if (darkMode) {
      setDarkmode("darkMode");
    } else {
      setDarkmode("lightmode");
    }
  }, [darkMode]);

  return (
    <div className="App" id={darkmode}>
      <img src={logo} alt="Cardgames logo" className="logo" />
      <h1 id={darkmode}>Welcome to Cardgames.org</h1>
      <p>(*Games with an online mode (Not yet implemented))</p>
      <div>
        <button
          className="darkMode"
          id={darkmode}
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        >
          Enable/Disable dark mode
        </button>
      </div>
      <Navbar />
      <GameNavbar />
      <Routes>
        <Route path="/" element={<Accounts />} />
        <Route
          path="/suggestions"
          element={<Suggestions darkMode={darkMode} />}
        />
        <Route
          path="/leaderboards"
          element={<Leaderboards darkMode={darkMode} />}
        />
        <Route
          path="/crazyeights"
          element={<CrazyEights darkMode={darkMode} />}
        />
        <Route path="/blackjack" element={<Blackjack darkMode={darkMode} />} />
        <Route
          path="/snipsnapsnorum"
          element={<SnipSnapSnorum darkMode={darkMode} />}
        />
        <Route path="/matching" element={<Matching darkMode={darkMode} />} />
        <Route path="/gofish" element={<GoFish darkMode={darkMode} />} />
        <Route
          path="/spidersolitare"
          element={<SpiderSolitare darkMode={darkMode} />}
        />
        <Route path="/war" element={<War darkMode={darkMode} />} />
      </Routes>
    </div>
  );
}

export default App;
