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
    const URL = ""

    switch (board) {
      case "Crazy Eights Moves":
        URL = "http://localhost:3001/leaderboards/CrazyEightsMoves"
        eightMoves(score);
        break;
      case "Blackjack Wins":
        URL = "http://localhost:3001/leaderboards/BlackjackWins"
        // blackjackWins(score);
        break;
      case "Snip Snap Snorum":
        URL = "http://localhost:3001/leaderboards/SnipSnapSnorumTime"
        // snipSnipSnorumTime();
        break;
      case "Matching Moves":
        URL = "http://localhost:3001/leaderboards/MatchingMoves"
        // MatchingMoves(score)
        break;
      case "Go Fish High Score":
        URL = "http://localhost:3001/leaderboards/GoFishScore"
        // GoFishScore(score)
        break;
      case "Spider Solitare Score":
        URL = "http://localhost:3001/leaderboards/SpiderSolitareScore"
        // SpiderSolitareScore(score)
        break;
      case "War Score":
        URL = "http://localhost:3001/leaderboards/WarScore"
        // warScore(score)
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
      alert("Leaderboard upload successful")
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

  // const snipSnipSnorumTime = (time) => {
  //   try {
  //     let res = axios.post(
  //       "http://localhost:3001/leaderboards/SnipSnapSnorumTime",
  //       {
  //         username: user,
  //         score: time,
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

  // const blackjackWins = (moves) => {
  //   try {
  //     let res = axios.post(
  //       "http://localhost:3001/leaderboards/BlackjackWins",
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

  // const MatchingMoves = (moves) =>{
  //   try {
  //     let res = axios.post(
  //       "http://localhost:3001/leaderboards/MatchingMoves",
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
  // }

  // const GoFishScore = (score) =>{
  //   try {
  //     let res = axios.post(
  //       "http://localhost:3001/leaderboards/GoFishScore",
  //       {
  //         username: user,
  //         score: score,
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
  // }

  // const warScore = (score) =>{
  //   try {
  //     let res = axios.post(
  //       "http://localhost:3001/leaderboards/WarScore",
  //       {
  //         username: user,
  //         score: score,
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
  // }

  // const SpiderSolitareScore = (score) =>{
  //   try {
  //     let res = axios.post(
  //       "http://localhost:3001/leaderboards/SpiderSolitareScore",
  //       {
  //         username: user,
  //         score: score,
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
  // }

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
