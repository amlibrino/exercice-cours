var temp;
var tension;
var pouls;

var temp = window.prompt("entrez votre température");

if (temp > 38);
{
    alert("vous avez de la fievre");
}

var tension = window.prompt("entrez votre tension");

if (temp > 41 && tension > 25) {
    alert("vous allez perdre patience");
}
else {
    alert("Éconduire l'olibrius");
}

var pouls = window.prompt("entrez le pouls");
if (pouls == 0) {
    alert("appeler le curé");
}
else if (temp > 42 || (tension < 25 && pouls > 180)) {
    alert("prevenir la famille");
}
else (temps > 40 || tension >= 25);
{
    alert("hospitaliser le patient");
}

var reponse = 'c'
if (reponse == "A") {
    console.log("Bonne réponse !");
}
else if (reponse == "B") {
    console.log("Mauvaise réponse !");
}
else {
    console.log("Réponse inconnue.");
}

var modele = "clio";

switch (modele) {
    case "508":
        console.log("Modèle 508 : marque Peugeot");
        break;

    case "Clio":
    case "Laguna":
        console.log("Modèle " + modele + " : marque Renault");
        break;

    case "C5":
        console.log("Modèle C5 : marque Citroën");
        break;

    default:
        console.log("Modèle " + modele + ": marque inconnue");
}



