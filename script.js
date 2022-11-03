// RECUPERER L'API Pronote PUIS PRENDRE les infos
// ENT "Toutatice" (Rennes) (CAS : toutatice, URL : "www.toutatice.fr") https://0220058u.pronote.toutatice.fr/pronote/
//include("pronote-api-maintained/bin/donnéeAPI.js");

var getUser = 0;
var getKey = 0;

function result() {
  let nameUser = document.getElementById("Nom d'utilisateur").value;
  let key = document.getElementById("Mot de passe").value;

  /* Sauvegarder les donnees dans une sessionStorage*/
  sessionStorage.setItem("Nom d'utilisateur", nameUser);
  sessionStorage.setItem("Mot de passe", key);
}

// recuperation des valeurs saisie par l'utilisateur dans notre sessionStorage
window.onload = function () {
  getUser = document.getElementById("Nom d'utilisateur").value =
    sessionStorage.getItem("Nom d'utilisateur");
  getKey = document.getElementById("Mot de passe").value =
    sessionStorage.getItem("Mot de passe");
  return getName, getSurname;
};

var DEMO_URL = "https://0220058u.pronote.toutatice.fr/pronote/";
var DEMO_USERNAME = getUser;
var DEMO_PASSWORD = getKey;
console.log(DEMO_PASSWORD);
