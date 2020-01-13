/* ******************* RECUPERATION & AFFICHAGE BASE DE DONNEES POUR PAGE LISTE DES AVENTURES ******************* */

const url = "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=An2aDx3J6TyOYREptmGLvsEmz08OUwR1";


// //////////////// APPEL AJAX POUR RECUPERER LA BASE DE DONNEES ////////////////

    async function recupererData() {
        let response = await fetch(url);
        let data = await response.json();
        var tableauAventure = data._embedded.events;
        console.log(data);


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

    // Afficher les données en HTML
        function afficherAventure() {
            for (let i=0 ; i < 9 ; i++) {
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
    }

    recupererData();