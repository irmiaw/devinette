/* 
Activité : jeu de devinette
*/

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

var nombre = 0;    // Nombre entré par le joueur
var nbEssais = 0;  // Compteur du nombre d'essais
var maxEssais = 6; // Valeur maximale du nombre d'essais avant que la partie soit perdue
var continuerJeu = true; // On utilise une variable booléenne pour ne pas faire 2 fois le même test dans la boucle et les conditions

// Le jeu continue tant que on n'ait pas perdu (valeur maxEssais atteinte) ou qu'on n'ait pas trouvé la solution
while (continuerJeu) {
	nombre = Number(prompt("Entrez un nombre :")); // Le joueur entre un nombre
    nbEssais++; // Le joueur vient d'utiliser un essai

    // Tests si le nombre est plus petit ou plus grand que la solution
    if (nombre < solution) {
        console.log(nombre + " est trop petit");
    } else if (nombre > solution) {
        console.log(nombre + " est trop grand");
    }

    // On teste la condition de la victoire d'abord, si on n'a pas trouvé la solution et on a attent le nombre maxEssais on a perdu
    if (nombre === solution) {   // Victoire !
        console.log("Bravo ! La solution était " + solution);
        console.log("Vous avez trouvé en " + nbEssais + " essai(s)");
        continuerJeu = false;    // Fin de la boucle
    } else if (nbEssais === maxEssais) { // Défaite :/
        console.log("Perdu... La solution était " + solution);
        continuerJeu = false;    // Fin de la boucle
    }
}
