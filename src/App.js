import "./App.css";
import logo from "./Images/PlayingCards4.jpg";
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

function App() {
  return (
    <div className="App">
      <img src={logo} alt="" />
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
      </Routes>
    </div>
  );
}

export default App;
