
//exo1---------------------

//déclaration de variable en recherche de l'id du boutton

//le onClick non intrusif

var exo1 =  document.getElementById( "exo1" );
exo1.addEventListener ("click", boucle1);
function  boucle1() 
{
/*demander un prenom et doit continuer à demander des prénoms à l'utilisateur 
jusqu'à ce qu'il laisse le champ vide. puis afficher les prenoms et le nombre*/
var prenom;
var i = 0;//initialisation
do {
    prenom = prompt("Entrez votre prenom, ou cliquez sur Annuler pour quitter");
    i++; //actualisation
    console.log(prenom)
} while (prenom != null && prenom !='');//tantque on clic pas sur annul et la case prenom n'est pas vide la boucle continue 
console.log("vous avez saisi " + i + " prenom");
}

// exo2----------------------------------

var exo2 =  document.getElementById ( "exo2" );
exo2.addEventListener ("click", boucle2);
function  boucle2() 
{

//ecrire les nombre inferieru a n 
var n = prompt("entrez un nombre");       //on demande d'ecrire un nombre
i = n;                  //initialisation 
while (i != 0)         // la condition (tantque un est different de 0
{
    console.log(i);      //action 
    i--;          // on decremente i
}
}

// exo3-------------------------

var exo3 =  document.getElementById( "exo3" );
exo3.addEventListener ("click", boucle3);
function  boucle3() 
{
// un programme qui demande deux entier et qui calcule la somme de n1 à n2
var n1 = parseInt(prompt("saisir un nombre"));
var n2 = parseInt(prompt("saisir un deuxieme nombre"));
var somme = 0;  //initialisation de la somme =0

for (i = n1; i <= n2; i++)  // pour i=n1( de n1 à intialisation), si i<n2(condition); incrementation (tout les nombre de i a n2)
{
    somme += i;//la somme += (tout les i)

}
console.log("la somme de n1 à n2 est :" + somme);
}

// exo4 --------
var exo4 =  document.getElementById( "exo4" );
exo4.addEventListener ("click", boucle4);
function  boucle4() 
{
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
}

//exo5--------------------------

var exo5 =  document.getElementById( "exo5" );
exo5.addEventListener ("click", boucle5);
function  boucle5() 
{
// les multiples de x à y (table de multiplication)

var n = parseInt(prompt("saisir un nombre"));//demander de rentrer des nombres 
var x = parseInt(prompt("saisir un nombre"));//demander de rentrer des nombres 
var resultat;
for (i = 1; i <= n; i++) {
    resultat = i * x;
    console.log(+i + " x " + x + "=" + resultat + "<br>");//<br> pour revenir a la ligne a chaque fois 
}
}

//exo6------------------------

var exo6 =  document.getElementById( "exo6" );
exo6.addEventListener ("click", boucle6);
function  boucle6() 
{
var myMot = prompt("entrez un mot");//entrer un mot ,variable myMot
var voyelle = 0;//compteur de voyelles

for (i = 0; i <= myMot.length; i++)//pour i=0 (initialisation), i<= a la longueur du mot myMot(condition),
{
    if (myMot[i] == "a" || myMot[i] == "e" || myMot[i] == "i" || myMot[i] == "o" || myMot[i] == "u" || myMot[i] == "y")
    //si le mot myMot contien ces voyelles a,e...   [i]tableau
    {
        voyelle++;
    }
}
alert("le nombre de voyelle est: " + voyelle);

/*
for (i = 0; i <= myMot.length; i++)//pour i=0 (initialisation), i<= a la longueur du mot myMot(condition),
{
    switch (myMot[i]) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
        case "y":
            voyelle++;
            break;
        default: "";
    }
}
alert("le nombre de voyelle est:" + voyelle);
*/
}

// exo7 -------------------------------

var exo7 =  document.getElementById( "exo7" );
exo7.addEventListener ("click", boucle7);
function  boucle7() 
{
/*Un  nombre premier est divisible uniquement par : 1 et lui-même*/
var N = parseInt(prompt("entrez un nombre"))

for (i = 2; i < N; i++) {
    if (N % i == 0) {
        alert(N + "n'est pas un nombre premier");
    }
    else {
        alert(N + "est un nombre premier");
    }
}
}

//exo8----------------------------------
var exo8 =  document.getElementById( "exo8" );
exo8.addEventListener ("click", boucle8);
function  boucle8() 
{
    var magic = parseInt(Math.random() * 100);// nombre donner par l'ordi entre 0 et 100,

    var i = 0;// initialisation de nombre de saisie ,variable du nombre de fois qu'on a compter (taper un nombre)
    var saisie;// enregister le nombre deja saisi
    var msg = ("le nombre a deviner est compris entre 0 et 100");//le message afficher 
    
    do {
      saisie = parseInt(prompt(msg));//on demande de saisir un nombre, 
      i++;//i suivant actualisation et compte le nombre de fois qu'on a saisi un nombre 
    
      if (saisie < magic)// si nombresaisie et < au nombre a deviner
      {
        msg = ("c'est plus");//le message afficher c'est plus
      }
      else {
        msg = ("c'est moins");//si non le message afficher c'est moins
      }
    } while (saisie != magic);//(condition) tantque le nombre saisi est different de magic 
    
    alert("bravo, c'est gagner" + ("\n") + "vous avez saisi" + "  " + i + "  " + "nombre");
}