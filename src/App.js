import "./App.css";
import logo from "./Images/PlayingCards4.jpg";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="" />
      <Navbar />
    </div>
  );
}

export default App;
