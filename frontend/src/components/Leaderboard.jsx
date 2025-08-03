import React from "react";
import "../App.css";

const mockData = [
  { name: "Alice", points: 120 },
  { name: "Bob", points: 105 },
  { name: "Charlie", points: 90 },
  { name: "You", points: 85 },
];

function Leaderboard({ goBack }) {
  return (
    <div className="leaderboard-container">
      <h2>Leaderboard</h2>
      <p className="leaderboard-subtext">Top Performing Interns</p>

      <div className="leaderboard-list">
        {mockData.map((entry, idx) => (
          <div className="leaderboard-entry" key={idx}>
            <span>{idx + 1}. {entry.name}</span>
            <span>{entry.points} pts</span>
          </div>
        ))}
      </div>

      <button className="back-button" onClick={goBack}>← Back to Dashboard</button>
    </div>
  );
}

export default Leaderboard;
