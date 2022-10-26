// RECUPERER L'API Pronote PUIS PRENDRE les infos
// ENT "Toutatice" (Rennes) (CAS : toutatice, URL : "www.toutatice.fr")
const pronote = require("pronote-lib");

let url = "https://0220058u.pronote.toutatice.fr/pronote";
let cas = "ac-Rennes"; //Use none bypass CAS auth.

let user = new pronote.User(
  { username: "H.cossec1", password: "Maison99100", url, cas },
  function () {
    user
      .get_marks()
      .then(function (res) {
        console.log(res);
      })
      .catch(function (err) {
        console.error(err);
      });
  }
);
