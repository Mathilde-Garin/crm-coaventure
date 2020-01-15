// FONCTIONS POUR PAGE AJOUTER UNE AVENTURE

/* ******************* BOUTON UPLOAD PHOTO DANS FORMULAIRE ******************* */

document.querySelector("html").classList.add('js');

var fileInput  = document.querySelector( ".input-file" ),  
    button     = document.querySelector( ".input-file-trigger" ),
    the_return = document.querySelector(".file-return");
      
button.addEventListener( "keydown", function( event ) {  
    if ( event.keyCode == 13 || event.keyCode == 32 ) {  
        fileInput.focus();  
    }  
});
button.addEventListener( "click", function( event ) {
   fileInput.focus();
   return false;
});  
fileInput.addEventListener( "change", function( event ) {  
    the_return.innerHTML = this.value;  
});  


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


// FIN FONCTION ASYNC
    }
    recupererData();