// calcule de la somme et la moyenne d'un des nombres tantque le nombre !=0 on continue a saisir les nombre.
var somme = 0; // initialisation de la somme
var moyenne = 0;// //de la moyenne
var taille = 0; // la taille veut dire le nombre de chiffre saisi
var max = 0;// initialiser le n max a 0
var min = 0;

while (n != 0) {
    var n = parseInt(prompt("saisir un nombre"));//demander de rentrer des nombres 
    taille++; // le nombre de fois qu'on saisi un nombre
    somme += n;  // la somme des n egale
}
moyenne = somme / (taille - 1); // la moyenne est egale a somme / taille -1 
console.log("la somme est :" + somme + "\n" + "la moyenne est :" + moyenne);
console.log("le nombre le plus grand est max :" + max);
console.log("le nombre le plus petit est min :" + min);

/*do
{
    var n=parseInt(prompt("saisir un nombre"));//demander de rentrer des nombres
    taille++; // le nombre de fois qu'on saisi un nombre
    somme+=n;  // la somme des n egale
    moyenne=somme/(taille-1); // la moyenne est egale a somme / taille -1

}while(n!=0) // tantque on saisie pas 0 , on continue de saisir des chiffre
alert("la somme est :"+somme +"\n" + "la moyenne est :"+moyenne);*/

