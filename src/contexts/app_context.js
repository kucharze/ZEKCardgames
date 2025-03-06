import { createContext, useContext, useState } from "react";
import axios from "axios";
export const AppContext = createContext();

const BASEURL = "http://localhost:3001";

export const AppContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [user, setUser] = useState("");

  //Add functions for uploading to leaderboards
  const uploadToLeaderboards = (board, score) => {
    console.log("uploading to leaderboards");

    switch (board) {
      case "Crazy Eights Moves":
        eightMoves(score);
        break;
      case "Blackjack Wins":
        blackjackWins();
        break;
      case "Snip Snap Snorum":
        // snipSnipSnorum();
        break;
      case "Matching Moves":
        break;
      case "Go Fish High Score":
        break;
      case "Spider Solitare Score":
        break;
      case "War Score":
        break;
      default:
        alert("No valid leaderboard option");
        break;
    }
  };

  const eightMoves = (moves) => {
    try {
      let res = axios.post(
        "http://localhost:3001/leaderboards/CrazyEightsMoves",
        {
          username: user,
          score: moves,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const blackjackWins = (moves) => {
    try {
      let res = axios.post(
        "http://localhost:3001/leaderboards/BlackjackWins",
        {
          username: user,
          score: moves,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        user,
        setUser,
        uploadToLeaderboards,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AppContext);
};
