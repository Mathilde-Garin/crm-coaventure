// FONCTIONS POUR AFFICHER TABLEAU (LISTE AV) GENERER PAR FORMULAIRE (AJOUT AV))
    
    // CHARGER LES DONNEES SAUVEGARDEES DANS LE TABLEAU tableAventureNew
    function chargerData() {
        let tableavNew = localStorage.getItem("tableAventureNew");
        tableAventureNew = JSON.parse(tableavNew);
    }
    chargerData();
    console.log(tableAventureNew);


    // AFFICHER DONNEES DU FORMULAIRE (PAGE HTML AJOUT AV) DANS LA LISTE DES AVENTURES (PAGE HTML LISTE AV)
    function afficherAventure() {

        for (let i=0 ; i < 9 ; i++) {
            console.log(i)
            document.querySelectorAll(".nom")[i].innerHTML = tableAventureNew[i+1].titreAv;   // Afficher les noms des aventures
            document.querySelectorAll(".date")[i].innerHTML = tableAventureNew[i+1].dateofbirth;     // Afficher les dates des aventures
            document.querySelectorAll(".lieu")[i].innerHTML = tableAventureNew[i+1].ville;   // Afficher les lieux des aventures
            document.querySelectorAll(".prix")[i].innerHTML = tableAventureNew[i+1].tarifPers;   // Afficher les tarifs / personne
            document.querySelectorAll(".nbplaces")[i].innerHTML = tableAventureNew[i+1].nbPlaces;   // Afficher les nombres de places des aventures
            document.querySelectorAll(".iconeActionConsulter")[i].innerHTML = "<img src='./img/oeil-bleu.png'>";   // Afficher icones action consulter
            document.querySelectorAll(".iconeActionModifier")[i].innerHTML = "<img src='./img/crayon.png'>";   // Afficher icones action modifier
            document.querySelectorAll(".iconeActionSupprimer")[i].innerHTML = "<img src='./img/supprimer.png'>";   // Afficher icones action supprimer
        } 
    }

    afficherAventure();



    