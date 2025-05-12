import { createContext, useContext, useState } from "react";
import axios from "axios";
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [user, setUser] = useState("");

  //Add functions for uploading to leaderboards
  const uploadToLeaderboards = (board, score) => {
    console.log("uploading to leaderboards");
    let URL = "";

    switch (board) {
      case "Crazy Eights Moves":
        URL = "http://localhost:3001/leaderboards/CrazyEightsMoves";
        break;
      case "Blackjack Wins":
        URL = "http://localhost:3001/leaderboards/BlackjackWins";
        break;
      case "Snip Snap Snorum":
        URL = "http://localhost:3001/leaderboards/SnipSnapSnorumTime";
        break;
      case "Matching Moves":
        URL = "http://localhost:3001/leaderboards/MatchingMoves";
        break;
      case "Go Fish High Score":
        URL = "http://localhost:3001/leaderboards/GoFishScore";
        break;
      case "Spider Solitare Score":
        URL = "http://localhost:3001/leaderboards/SpiderSolitareScore";
        break;
      case "War Score":
        URL = "http://localhost:3001/leaderboards/WarScore";
        break;
      default:
        alert("No valid leaderboard option");
        break;
    }

    try {
      let res = axios.post(
        URL,
        {
          username: user,
          score: score,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
      alert("Leaderboard upload successful");
    } catch (error) {
      console.log(error);
    }
  };

  // const eightMoves = (moves) => {
  //   try {
  //     let res = axios.post(
  //       "http://localhost:3001/leaderboards/CrazyEightsMoves",
  //       {
  //         username: user,
  //         score: moves,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     console.log(res);
  //     alert("Leaderboard upload successful")
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
