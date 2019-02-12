const express = require("express");

const path = require("path");

const navianos = require('./navianos.json');

const app = express();

const port = process.env.PORT || 4040;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use((req, res, next) => {
  res.header('Content-Type', 'application/json');
  next();
});

app.get("/", (req, res, next) => {
  console.log("Requesting all the navians ");
  res.json({ data: navianos });
});

app.get("/:id", (req, res, next) => {
  const id = req.params.id;
  console.log("Requesting... ID: " + id);
  let payload = navianos.filter((nvt) => nvt.id == id);
  if(payload) {
    res.json(payload).status(200);
  } else {
    res.json(null).status(404);
  }
});

app.listen(port, () => {
  console.log("====================================");
  console.log("Server is up");
  console.log("====================================");
});
