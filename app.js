const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  return res.send("HELLO WORLD");
});
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/user", function (req, res) {

  const user = {
    name: "Mercy",
    age: "20",
    sex: "female",
  };
  res.json(user);
});
app.listen(port, () => console.log(`Server listening on port: ${port}`))