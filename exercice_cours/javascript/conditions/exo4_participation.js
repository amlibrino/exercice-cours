/*Un patron décide de calculer le montant de sa participation au prix du repas de ses employés de la façon suivante :

si il est célibataire : participation de 20%
si il est marié : participation de 25%
si il a des enfants : participation de 10% supplémentaires par enfant
la participation est plafonnée à 50%
si le salaire mensuel est inférieur à 1200 €, la participation est majorée de 10%.
Ecrire le programme qui lit les informations au clavier et affiche pour chaque salarié, la participation à laquelle il a droit.*/

var participation = 0;//participation qui commence de 0
var statut = window.confirm("etes vous celibataire ?");//booleen 

if (statut == true)// celibataire
{
    alert(participation = (participation + 20));
}
else {
    alert(participation = (participation + 25));
}
var enfant = window.prompt("nombre d'enfant");//demande nombre d'enfant

if (enfant > 0) {
    alert(participation = (participation + enfant * 10))
}

if (participation > 50) {
    alert(participation = 50)
}
var salaire = parseInt(window.prompt("entrez votre salaire"));// persInt pour afficher le salaire en nombre et pas en chaine de carractere

if (salaire < 1200) {
    alert(participation = participation + 10)
}


var salaire = parseInt(prompt("Entrez votre salaire"));
var mar = prompt("Etes-vous marié?");
var enf = parseInt(prompt("Nombre d'enfants ?"));
var perc = 0;

console.log("Salaire : " + salaire);
console.log("Marié : " + mar);
console.log("Nombre d'enfants : " + enfant);

if (salaire < 1200) {
	if (mar == "oui") {
		perc = 25 + (10 * enf) + 10;
	}
	else {
		perc = 20 + (10 * enf) + 10;
	}
}
else // Cas > 1200 
{
	if (mar == "oui") {
		perc = 25 + (10 * enf);
	}
	else {
		perc = 20 + (10 * enf);
	}
}

// Pour limiter au minimum de 50, on le force lorsque c'est supérieur
if (perc > 50) {
	perc = 50;
}
alert("Le taux de participation final est : " + perc); 
