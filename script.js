// RECUPERER L'API Pronote PUIS PRENDRE les infos

const fetchPlaylist = async () => {
  infos =
    await fetch(`http://192.168.42.182:5500/?username=H.cossec1&password=Maison99100&link=https://0220058u.pronote.toutatice.fr/pronote/eleve.html?identifiant=
  `)
      .then((response) => {
        return response.json();
      })
      .then(function once(result) {
        console.log(result);
      });
};
