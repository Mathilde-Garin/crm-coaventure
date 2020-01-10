/* ********************** RECUPERATION & AFFICHAGE BASE DE DONNEES ********************** */

const url = "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=An2aDx3J6TyOYREptmGLvsEmz08OUwR1";


// Appel Ajax pour récupérer la base de données

async function recupererData() {
    let response = await fetch(url);
    let data = await response.json();
    var tableauAventure = data._embedded.events;
    console.log(data);



    // Fonction pour afficher les données des aventures dans le tableau

    function afficherAventure() {
        for (let i=0 ; i < 6 ; i++) {
            document.querySelectorAll(".nom")[i].innerHTML = tableauAventure[i].name;   //Affichage noms des aventures
            document.querySelectorAll(".date")[i].innerHTML = tableauAventure[i].dates.start.localDate;     // Affichage dates des aventures
            document.querySelectorAll(".lieu")[i].innerHTML = tableauAventure[i]._embedded.venues[0].city.name;   //Affichage lieux des aventures
            document.querySelectorAll(".nbplaces")[i].innerHTML = tableauAventure[i]._embedded.venues[0].upcomingEvents._total;   //Affichage nombres de places des aventures

            // Fonction pour prix car pas présent partout
            if (tableauAventure[i].priceRanges === undefined) {
                document.querySelectorAll(".prix")[i].innerHTML = "Gratuit";   //Affichage "gratuit" si pas de prix dans BDD
                
            } else {
                document.querySelectorAll(".prix")[i].innerHTML = tableauAventure[i].priceRanges[0].min;   //Affichage prix des aventures
            }
        }
    }
    afficherAventure();


 // Fonction pour afficher les données dans le tableau Top Aventures

    function afficherTopAventures() {

        var tableTruc =[name="", textid=""];

        // Récupérer index & texte de l'id pour faire un tri
        for (let i=0 ; i < tableauAventure.length ; i++) {
            if (tableauAventure[i].promoter !== undefined) {
                 tableTruc.push([tableauAventure[i].name, tableauAventure[i].promoter.id]);
            }
        }

        // Trier tableTruc du plus grand au plus petit selon son textid


        function compare (a,b) {

                const topA = a.texteid();
                const topB = b.texteid();
        
                let comparison = 0;
                if (topA > topB) {
                    comparison = 1;
                } else if (topA < topB) {
                     comparison = -1;
                } else {
                    comparison = 1;
                }
                return comparison;

        }
        
            console.log(tableTruc.sort(compare));


               // document.querySelectorAll(".topAventure")[i].innerHTML = tableauAventure[i].promoter.id;

    console.log(tableTruc);

    }
    afficherTopAventures();


// Fonction pour afficher les données dans le tableau Top Aventures

    // function compare (a,b) {
    //     if (tableauAventure.promoter !== undefined) {
    //         const topA = a.promoter.id();
    //         const topB = b.promoter.id();

    //         let comparison = 0;
    //         if (topA > topB) {
    //             comparison = 1;
    //         } else if (topA < topB) {
    //             comparison = -1;
    //         } else {
    //             comparison = 1;
    //         }
    //         return comparison;
    //     }
    // }

    // console.log(tableauAventure.sort(compare));

}

recupererData();