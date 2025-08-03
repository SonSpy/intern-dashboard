const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/intern", (req, res) => {
  res.json({
    name: "Vishal SPY",
    referralCode: "vishal2025",
    totalDonations: 5000,
  });
});

app.get("/api/leaderboard", (req, res) => {
  res.json([
    { name: "Vishal SPY", amount: 5000 },
    { name: "Riya", amount: 4500 },
    { name: "Aryan", amount: 4200 },
  ]);
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
