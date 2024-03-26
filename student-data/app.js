const express = require("express");

const app = express();
const PORT = 3100;

app.get("/", (req, res) => {
  res.send("Welcome to Student Data Appplication");
});

app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});
