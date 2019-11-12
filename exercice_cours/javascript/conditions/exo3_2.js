
//afficher si nombre est pair ou impaire 

var nombre = window.prompt("saisaissez un nombre");
if ( nombre%2==0) 
{
    alert(nombre + " " + "est un nombre paire");
}
else {
    alert (nombre +" "+ "est un nombre impaire");
}

// calculer l age et dire si majeur 
var date = parseInt(prompt("votre année de naissance?"));// window.prompt ou juste prompt c pareil pour demander de saisir une annee de naissance 
var age =2019-date; // calcule de l age
window.alert("vous avez"+" "+age+" "+"ans"); // pour afficher l'age 
if((age>=18))  // condition si + ou = a 18 
{
    alert("vous etes majeur");
}
else
{
    alert("vous etes mineur")
}