
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


/*var prenom=prompt("entrez votre prenom");

while (prenom!=undefined)
{
    prompt("entrez votre prenom"+"\n"+"ou cliquez sur annuler pour arreter la saisie");
}

alert("liste des prenom :"+prenom+"vous avez saisi:" +i++);*/

/*var nom=prompt("saisir un prénom"), saisie=nom;
i=1;
while(saisie){
    if(saisie==undefined){
        break;}
        alert("Noms : "+nom+" Nombre : "+i);
    saisie=prompt("saisir un prénom");
    nom+=" "+saisie;
    i++;
}

alert("liste des nom :"+nom+" Vous avez saisi: "+i+"noms");*/
/*console.log("Table de multiplication par 5");
console.log("=============================");

for (i=0; i<=10; i++)
{
       resultat = 5 * i;
       console.log("5 * "+i+" = "+resultat);
}

// instructions exécutées après le for (i vaut 10)
console.log("fin de la boucle");*/


/*
for (valeur initiale; condition; actualisation)
{
       instructions;
}
*/

/*
initialisation

while ( condition )
{
    // Instructions

    // Actualisation
}
*/