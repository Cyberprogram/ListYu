// RECUPERER L'API Pronote PUIS PRENDRE les infos
// ENT "Toutatice" (Rennes) (CAS : toutatice, URL : "www.toutatice.fr") https://0220058u.pronote.toutatice.fr/pronote
const pronote = require("pronote-api");

// Exemple
const url = "https://www.toutatice.fr/portail/auth/pagemarker/2/MonEspace";
const username = "H.cossec1";
const password = "Maison99100";

async function main() {
  const session = await pronote.login(url, username, password /*, cas*/);

  console.log(session.user.name); // Affiche le nom de l'élève
  console.log(session.user.studentClass.name); // Affiche la classe de l'élève

  const timetable = await session.timetable(); // Récupérer l'emploi du temps d'aujourd'hui
  const marks = await session.marks(); // Récupérer les notes du trimestre

  console.log(`L'élève a ${timetable.length} cours aujourd'hui`);
  console.log(
    `et a pour l'instant une moyenne de ${marks.averages.student} ce trimestre.`
  );

  // etc. les fonctions utilisables sont 'timetable', 'marks', 'contents', 'evaluations', 'absences',
  // 'homeworks', 'infos', et 'menu', sans oublier les champs 'user' et 'params' qui regorgent d'informations.
}

main().catch((err) => {
  if (err.code === pronote.errors.WRONG_CREDENTIALS.code) {
    console.error("Mauvais identifiants");
  } else {
    console.error(err);
  }
});
