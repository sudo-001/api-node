// import React from 'react'; // Client
// On importe "express"
const express = r/user/equire("express"); // Server

// On initialise "express"
const app = express();

// Definition du port d'ecoute
const port = 3000;

// Route principale
app.get("/", (req, res) => {
  console.log("Route '/' visitee");
  console.log(req.rawHeaders);
  res.send("Hello World !");
});

// Route ajouter 'utilisateur'
app.post("/user", (req, res) => {
  res.send("user added !");
});

// Route obtenir informations 'utilisateur X'
app.get(":id", (req, res) => {
  res.send(`User ${req.params.id} : nom: Marc, age: 18 ans`);
});

// Route obtenir informations 'utilisateur X'
app.get("/user/detail/:id", (req, res) => {
  res.send(`page detail : User ${req.params.id} : nom: Marco, age: 20 ans`);
});

// Route avoir les 'utilisateurs'
app.get("/user", (req, res) => {
  res.send("User list !");
});

app.listen(port, () => {
  console.log("Server is running on http://127.0.0.1:3000");
});
