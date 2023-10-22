const express = require("express");
const dotenv = require("dotenv");
dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

const app = express();
const PORT = process.env.PORT || 3000; // Usa a variável de ambiente ou 3000 como valor padrão

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(PORT, () => {
  console.log(`Express app iniciada na porta ${PORT}.`);
});