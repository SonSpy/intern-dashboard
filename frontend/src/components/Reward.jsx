import React from "react";
import "../App.css";

function Reward({ goBack }) {
  return (
    <div className="reward-container">
      <h2>Your Rewards</h2>
      <p className="reward-subtext">Complete tasks to unlock rewards!</p>

      <div className="reward-tiers">
        <div className="reward-card bronze">
          <h3>Bronze Tier</h3>
          <p>Complete 5 tasks</p>
        </div>
        <div className="reward-card silver">
          <h3>Silver Tier</h3>
          <p>Complete 10 tasks</p>
        </div>
        <div className="reward-card gold">
          <h3>Gold Tier</h3>
          <p>Complete 20 tasks</p>
        </div>
      </div>

      <button className="back-button" onClick={goBack}>← Back to Dashboard</button>
    </div>
  );
}

export default Reward;
