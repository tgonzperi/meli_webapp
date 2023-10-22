const express = require("express");

const meli = require("./meli.js");

const PORT = process.env.PORT || 80;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
  res.end();
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
