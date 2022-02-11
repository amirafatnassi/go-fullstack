const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("requete reçue");
  next();
});

app.use((req, res, next) => {
  res.status(201);
});

app.use((req, res) => {
  res.json({ message: "votre requete a été bien reçue !" });
  next();
});

app.use((req,res)=>{
    console.log('reponse ennvoyé !')
});

module.exports = app;
