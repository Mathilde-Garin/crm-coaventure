// FONCTIONS POUR PAGE D'ACCUEIL : DASHBOARD

/* ******************* RECUPERATION & AFFICHAGE BASE DE DONNEES DANS DASHBOARD ******************* */

const url = "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=An2aDx3J6TyOYREptmGLvsEmz08OUwR1";


// //////////////// APPEL AJAX POUR RECUPERER LA BASE DE DONNEES ////////////////

    async function recupererData() {
        let response = await fetch(url);
        let data = await response.json();
        var tableauAventure = data._embedded.events;
        console.log(data);


// //////////////// AFFICHER LES CHIFFRES DANS ENCADRES FOCUS CHIFFRES ////////////////

    // 1- Total du chiffre d'affaires
        let totalCA = 0;
        for (i=0 ; i < tableauAventure.length ; i++) {
            if (tableauAventure[i].priceRanges !== undefined) { // Attention, pas de priceRanges pour tous
                totalCA += tableauAventure[i].priceRanges[0].max;
            }
        }
        document.getElementById("texteChiffresCA").innerHTML = Math.round(totalCA);   // Afficher chiffre d'affaires


    // 2- Nombre d'aventures
        let nbAv = 0;
            for (i=0 ; i < tableauAventure.length ; i++) {
                nbAv += tableauAventure[i]._embedded.venues[0].upcomingEvents._total;
            }
        document.getElementById("texteChiffresAv").innerHTML = Math.round(nbAv);   // Afficher nombre d'aventures
    

    // 3- Nombre de CoAventuriers
        let nbCoAv = 0;
        for (i=0 ; i < tableauAventure.length ; i++) {
            if (tableauAventure[i].priceRanges !== undefined) { // Attention, pas de priceRanges pour tous
                nbCoAv += tableauAventure[i].priceRanges[0].min;
            }
        }
        document.getElementById("texteChiffresCoAv").innerHTML = Math.round(nbCoAv);   // Afficher chiffre d'affaires
    

    // 4- Nombre de professionnels
        document.getElementById("texteChiffresPro").innerHTML = tableauAventure.length;   // Afficher nombre de professionnels


// //////////////// AFFICHER LES DONNEES DANS LE TABLEAU DES TOP AVENTURES ////////////////

    var tableTopAv = [textid="", name=""];

    function afficherTopAventures() {

        // Récupérer index & texte de l'id pour faire un tri
            for (let i=0 ; i < tableauAventure.length ; i++) {
                if (tableauAventure[i].priceRanges !== undefined) { // Attention, pas de priceRanges pour tous
                    tableTopAv.push([tableauAventure[i].priceRanges[0].max, tableauAventure[i].name]);
                }
            }

        // Trier priceRanges max par ordre décroissant
            tableTopAv.splice(0,2);  // Supprimer les 2 1ers éléments du tableau qui sont vides
            function compare(x, y) {
                return x - y;
            }
            tableTopAv.sort(compare); // Trier par ordre décroissant

        // AFFICHER DANS LE TABLEAU HTML LES NOMS DES TOPS AVENTURES
            for (let i=0 ; i < 6 ; i++) {
                document.querySelectorAll(".topAventure")[i].innerHTML = tableTopAv[i][1];
            }
    }
    afficherTopAventures();


// //////////////// AFFICHER LES DONNEES DANS LE TABLEAU DES PROCHAINES AVENTURES A COMPLETER ////////////////

    // Trier par date décroissante
        function SortTime(a,b){ 
            da=new Date(a.dates.start.localDate);
            db=new Date(b.dates.start.localDate);
            return (da>db)?1:-1;
        }
        tableauAventure.sort(SortTime);

    // Afficher les données en HTML
        function afficherAventure() {
            for (let i=0 ; i < 6 ; i++) {
                document.querySelectorAll(".nom")[i].innerHTML = tableauAventure[i].name;   //Affichage noms des aventures
                document.querySelectorAll(".date")[i].innerHTML = tableauAventure[i].dates.start.localDate;     // Affichage dates des aventures
                document.querySelectorAll(".lieu")[i].innerHTML = tableauAventure[i]._embedded.venues[0].city.name;   //Affichage lieux des aventures
                document.querySelectorAll(".nbplaces")[i].innerHTML = tableauAventure[i]._embedded.venues[0].upcomingEvents._total;   //Affichage nombres de places des aventures

                // Fonction spécifique pour le prix
                if (tableauAventure[i].priceRanges === undefined) { // Attention, pas de priceRanges pour tous
                    document.querySelectorAll(".prix")[i].innerHTML = "Gratuit";   //Affichage "gratuit" si pas de prix dans BDD
                    
                } else {
                    document.querySelectorAll(".prix")[i].innerHTML = tableauAventure[i].priceRanges[0].min;   //Affichage prix des aventures
                }
            }
        }
    afficherAventure();

// FIN FONCTION ASYNC    
    }
    recupererData();