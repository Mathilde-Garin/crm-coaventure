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


    // SAUVEGARDER
    function save() {
        localStorage.setItem("tableAventureNew", JSON.stringify(tableAventureNew));
    }


    // AFFICHER UNE 1ère AVENTURE DE BASE DANS LA LISTE DES AVENTURES
    function ajoutAvInital() {
        let avInitial = new NewAventure (
            "Atelier aligot avec un grand chef",
            "2020-02-01",
            "Montpellier",
            "59 €",
            "10"
        );   
        tableAventureNew.push(avInitial);
        save();
    }
    ajoutAvInital();
    

    // CHARGER LES DONNEES
    function chargerData() {
        let tableavNew = localStorage.getItem("tableAventureNew");
        tableAventureNew = JSON.parse(tableavNew);
    }
    chargerData();

    
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

