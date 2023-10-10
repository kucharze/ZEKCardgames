import "./App.css";
import logo from "./Images/PlayingCards4.jpg";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Accounts from "./pages/Accounts/Accounts";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Accounts />} />
      </Routes>
    </div>
  );
}

export default App;
