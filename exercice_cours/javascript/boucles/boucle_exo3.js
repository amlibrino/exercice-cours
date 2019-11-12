
// un programme qui demande deux entier et qui calcule la somme de n1 à n2
var n1 = parseInt(prompt("saisir un nombre"));
var n2 = parseInt(prompt("saisir un deuxieme nombre"));
var somme = 0;  //initialisation de la somme =0

for (i = n1; i <= n2; i++)  // pour i=n1( de n1 à intialisation), si i<n2(condition); incrementation (tout les nombre de i a n2)
{
    somme += i;//la somme += (tout les i)

}
console.log("la somme de n1 à n2 est :" + somme);