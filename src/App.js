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

function App() {
  return (
    <div className="App">
      <img src={logo} alt="Cardgames logo" />
      <h1>Welcome to Cardgames.org</h1>
      <p>
        The games on this site may not work with versions of Internet Explorer
      </p>
      <p>(*Online games)</p>
      <Navbar />
      <GameNavbar />
      <Routes>
        <Route path="/" element={<Accounts />} />
        <Route path="/suggestions" element={<Suggestions />} />
        <Route path="/leaderboards" element={<Leaderboards />} />
        <Route path="/crazyeights" element={<CrazyEights />} />
        <Route path="/blackjack" element={<Blackjack />} />
        <Route path="/snipsnapsnorum" element={<SnipSnapSnorum />} />
        <Route path="/matching" element={<Matching />} />
        <Route path="/gofish" element={<GoFish />} />
        <Route path="/spidersolitare" element={<SpiderSolitare />} />
        <Route path="/war" element={<War />} />
      </Routes>
    </div>
  );
}

export default App;
