const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Olá minha imagem!!!!");
});

app.listen(port, () => {
  console.log("executando na porta " + port);
});
