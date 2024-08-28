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
import { useState, useEffect, useContext } from "react";
import { useAuth } from "./contexts/app_context";

function App() {
  // const [darkMode, setDarkMode] = useState(false);
  // const [darkmode, setDarkmode] = useState("darkmode");

  const AppContext = useAuth();

  useEffect(() => {
    console.log("darkmode is " + AppContext.isDarkMode);
  }, [AppContext.isDarkMode]);

  return (
    <div className="App" id={AppContext.isDarkMode ? "darkMode" : "lightmode"}>
      <img src={logo} alt="Cardgames logo" className="logo" />
      <h1 id={AppContext.isDarkMode ? "darkMode" : "lightmode"}>
        Welcome to Cardgames.org
      </h1>
      <h3>Active User: No active user</h3>
      <p>(*Games with an online mode (Not yet implemented))</p>
      <div>
        <button
          className="darkMode"
          id={AppContext.isDarkMode ? "darkMode" : "lightmode"}
          onClick={() => {
            AppContext.setIsDarkMode((prev) => {
              if (prev) {
                return false;
              } else {
                return true;
              }
            });
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
          element={
            <Suggestions
              darkMode={AppContext.isDarkMode ? "darkMode" : "lightmode"}
            />
          }
        />
        <Route
          path="/leaderboards"
          element={
            <Leaderboards
              darkMode={AppContext.isDarkMode ? "darkMode" : "lightmode"}
            />
          }
        />
        <Route
          path="/crazyeights"
          element={
            <CrazyEights
              darkMode={AppContext.isDarkMode ? "darkMode" : "lightmode"}
            />
          }
        />
        <Route
          path="/blackjack"
          element={
            <Blackjack
              darkMode={AppContext.isDarkMode ? "darkMode" : "lightmode"}
            />
          }
        />
        <Route
          path="/snipsnapsnorum"
          element={
            <SnipSnapSnorum
              darkMode={AppContext.isDarkMode ? "darkMode" : "lightmode"}
            />
          }
        />
        <Route
          path="/matching"
          element={
            <Matching
              darkMode={AppContext.isDarkMode ? "darkMode" : "lightmode"}
            />
          }
        />
        <Route
          path="/gofish"
          element={
            <GoFish
              darkMode={AppContext.isDarkMode ? "darkMode" : "lightmode"}
            />
          }
        />
        <Route
          path="/spidersolitare"
          element={
            <SpiderSolitare
              darkMode={AppContext.isDarkMode ? "darkMode" : "lightmode"}
            />
          }
        />
        <Route
          path="/war"
          element={
            <War darkMode={AppContext.isDarkMode ? "darkMode" : "lightmode"} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
