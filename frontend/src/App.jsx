import React, { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Reward from "./components/Reward";
import Leaderboard from "./components/Leaderboard";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("login");

  const handleLogin = () => {
    setCurrentPage("dashboard");
  };

  const goToReward = () => {
    setCurrentPage("reward");
  };

  const goToLeaderboard = () => {
    setCurrentPage("leaderboard");
  };

  const goToDashboard = () => {
    setCurrentPage("dashboard");
  };

  return (
    <>
      {currentPage === "login" && <Login onLogin={handleLogin} />}
      {currentPage === "dashboard" && (
        <Dashboard
          goToReward={goToReward}
          goToLeaderboard={goToLeaderboard}
        />
      )}
      {currentPage === "reward" && <Reward goBack={goToDashboard} />}
      {currentPage === "leaderboard" && <Leaderboard goBack={goToDashboard} />}
    </>
  );
}

export default App;
