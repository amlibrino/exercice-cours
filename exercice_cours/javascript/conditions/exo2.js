/* 2 - Age
Ecrivez un programme qui demande l'année de naissance à l'utilisateur.
En réponse votre programme doit afficher l'âge de l'utilisateur et indiquer si l'utilisateur est majeur
ou mineur.*/

var annee_naissance = parseInt(prompt("Saisir année de naissance"));

age = 2019 - annee_naissance;

if (age < 18) {
	alert("Vous avez " + age + " ans, vous êtes mineur");
}
else {
	alert("Vous avez " + age + " ans, vous êtes majeur");
}


/*Soit les variables suivantes :
a qui contient la chaîne de caractères 100
b = 100
c qui contient la valeur 1,00
d booléen qui vaut vrai*/

var a = "100";
var b = 100;
var c = 1.00;
var d = true;

var a = "100";
window.alert("ceci est une chaine de caractere :" + a);

var b = 100;
b--; // décrementation 
window.alert(b);

var c = 1.00;
var z = a + c; // on peut ecrire c+= a ( c plus egale a  = c+a)
window.alert(z);

var d = true;
window.alert(!d); // inverser la valeur de d 