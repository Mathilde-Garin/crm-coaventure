// //////////////// AJOUTER UNE AVENTURE VIA FORMULAIRE ////////////////

    // CONSTRUCTOR
    class NewAventure {
        constructor (titreAv, dateofbirth, ville, tarifPers, nbPlaces) {
            this.titreAv = titreAv;
            this.dateofbirth = dateofbirth;
            this.ville = ville;
            this.tarifPers = tarifPers;
            this.nbPlaces = nbPlaces;
        }
    }


    // INITIALISATION VARIABLE
    var tableAventureNew = [{
        titreAv: "",
        dateofbirth: "",
        ville: "",
        tarifPers: "",
        nbPlaces: ""
    }];

    // CHARGER LES DONNEES
    function chargerData() {
        let tableavNew = localStorage.getItem("tableAventureNew");
        tableAventureNew = JSON.parse(tableavNew);
    }
    chargerData();


    // SAUVEGARDER
    function save () {
        localStorage.setItem("tableAventureNew", JSON.stringify(tableAventureNew));
    }
    

    // ENREGISTRER DONNEES DU FORMULAIRE DANS UN TABLEAU D'OBJETS
    function saveData() {
        let titreAvValue = document.getElementById('titreAv').value;
		let dateofbirthValue = document.getElementById('dateofbirth').value;
        let villeValue = document.getElementById('ville').value;
        let tarifPersValue = document.getElementById('tarifPers').value;
        let nbPlacesValue = document.getElementById('nbPlaces').value;
		let nouvelleAv = new NewAventure (titreAvValue, dateofbirthValue, villeValue, tarifPersValue, nbPlacesValue);
        tableAventureNew.push(nouvelleAv);
        save();
            console.log(nouvelleAv);
            console.log(tableAventureNew);
    }

    document.getElementById("buttonSaveForm").onclick = saveData;

