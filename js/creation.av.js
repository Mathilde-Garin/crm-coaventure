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
    var aventureNew = [{
        titreAv: "",
        dateofbirth: "",
        ville: "",
        tarifPers: "",
        nbPlaces: ""
    }];

    // ENREGISTRER DONNEES DU FORMULAIRE DANS UN TABLEAU
    function saveData() {
        let titreAvValue = document.getElementById('titreAv').value;
		let dateofbirthValue = document.getElementById('dateofbirth').value;
        let villeValue = document.getElementById('ville').value;
        let tarifPersValue = document.getElementById('tarifPers').value;
        let nbPlacesValue = document.getElementById('nbPlaces').value;
		let nouvelleAv = new NewAventure (titreAvValue, dateofbirthValue, villeValue, tarifPersValue, nbPlacesValue);
        aventureNew.push(nouvelleAv);
        // localStorage.setItem("nouvelleAv", JSON.stringify(nouvelleAv));
        console.log(nouvelleAv);
    }

    document.getElementById("buttonSaveForm").onclick = saveData;

    // AFFICHER DONNEES DU FORMULAIRE (PAGE AJOUTER) DANS LA LISTE DES AVENTURES (PAGE LISTE AV)

    function afficherAventure() {
        for (let i=0 ; i < 9 ; i++) {
            document.querySelectorAll(".nom")[i].innerHTML = nouvelleAv[i].titreAv;   //Affichage noms des aventures
            document.querySelectorAll(".date")[i].innerHTML = nouvelleAv[i].dateofbirth;     // Affichage dates des aventures
            document.querySelectorAll(".lieu")[i].innerHTML = nouvelleAv[i].ville;   //Affichage lieux des aventures
            document.querySelectorAll(".nbplaces")[i].innerHTML = nouvelleAv[i].tarifPers;   //Affichage tarif / personne
            document.querySelectorAll(".nbplaces")[i].innerHTML = nouvelleAv[i].nbPlaces;   //Affichage nombres de places des aventures
        }
    }

    afficherAventure();
