const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Bienvenu sur notre API !");
});

// Routes propres aux utlisateurs
app.get("/user", (req, res) => {
  console.log("Liste des utilisateurs");
  res.send("Page User");
});

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  // On effectue une requete vers notre BASE DE DONNEES afin d'avoir les informations sur l'utilisateur avec l'id 9
  // SELECT * FROM users WHERE id = id;
  res.send(`Details sur l'utilisateur : ${req.params.id}`);
});

app.delete("/user/:id", (req, res) => {
  const identifiant = req.params.id;

  // SELECT * FROM users WHERE id = identifiant;
  res.send(`Suppression de l'utilisateur : ${identifiant}`);
});

// Routes propres aux produits
app.get("/products", (req, res) => {
  res.send("Liste des produits");
});

// Definition de l'ecouteur d'url
app.listen(port, () => {
  console.log(`Server is running at http://127.0.0.1:${port}`);
});

// http://127.0.0.1:3000/ => home
// http://127.0.0.1:3000/user => user
//
