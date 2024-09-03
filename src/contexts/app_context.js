import { createContext, useContext, useState } from "react";
import axios from "axios";
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [user, setUser] = useState("");

  //Add functions for uploading to leaderboards
  const uploadToLeaderboards = (board) => {
    console.log("uploading to leaderboards");
    if (board === "Select a leaderboard option") {
      alert("Please select a valid option");
      return;
    }
  };

  const eightMoves = () => {
    try {
      let res = axios.post(
        "http://localhost:3001/leaderboards/CrazyEightsMoves",
        {
          username: user,
          score: 8,
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
