
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