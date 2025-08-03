import React from "react";
import "../App.css";

function Dashboard({ goToReward, goToLeaderboard }) {
  return (
    <div className="dashboard-container">
      <h1>Welcome, Vishal!</h1>
      <p>Your Referral Code: <strong>vishal2025</strong></p>
      <p>Total Donations Raised: <strong>₹12,000</strong></p>

      <div className="dashboard-buttons">
        <button onClick={goToReward}>View Rewards</button>
        <button onClick={goToLeaderboard}>View Leaderboard</button>
      </div>

      <div className="rewards-section">
        <h2>Rewards & Unlockables</h2>
        <ul>
          <li>🎉 ₹5000 Raised - Bronze Badge</li>
          <li>🏅 ₹10,000 Raised - Silver Badge</li>
          <li>🥇 ₹20,000 Raised - Gold Badge</li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
