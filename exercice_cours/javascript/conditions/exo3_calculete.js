/* 3 - Calculette
Faire la saisie de 2 nombres entiers, puis la saisie d'un opérateur '+', '-', '*' ou '/'.
Si l'utilisateur entre un opérateur erroné, le programme affichera un message d'erreur.
Dans le cas contraire, le programme effectuera l'opération demandée (en prévoyant le cas d'erreur
"division par 0"), puis affichera le résultat. */

var num1 = parseInt(window.prompt("saisir un 1er nombre"));
var num2 = parseInt(window.prompt("saisir un 2eme nombre"));
var operateur = window.prompt("saisir un operateur");
var resultat;
if (num2 == 0 && operateur == "/") // On traite d'abord le cas de la division par 0 :
{
    alert("division impossible");
}// si non le reste du calcule est traité par un switch 
else {
    switch (operateur)//On utilise un switch pour prendre chaque opérateur au cas par cas
    {
        case "+":
            resultat = num1 + num2;
            break;
        case "-":
            resultat = num1 - num2;
            break;

        case "*":
            resultat = num1 * num2;
            break;
        case "/":
            resultat = num1 / num2;
            break;
        default:
            alert("Operateur" + operateur + "invalide");
            break;
    }
}
if (typeof resultat === "number") 
{
    alert(num1 + operateur + num2 + "=" + resultat);
} /* Si la variable resultat est de type entier, on l'affiche
* mettre une condition ici permet de ne pas afficher 
* le message s'il y a une des 2 erreurs divison par zéro ou opérateur invalide 
* donc pas de résultat 
*/



/*var modele = "clio";

switch (modele)
{
  case "508" :
     console.log("Modèle 508 : marque Peugeot");
     break;

  case "Clio" :
  case "Laguna" :
     console.log("Modèle "+modele+" : marque Renault");
     break;

  case "C5" :
     console.log("Modèle C5 : marque Citroën");
     break;

  default:
     console.log("Modèle "+modele+": marque inconnue");
}*/