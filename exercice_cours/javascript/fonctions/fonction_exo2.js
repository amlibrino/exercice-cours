function fonction2()    // j'ai appelé fonction2() j'ai mis les variable phrase et lettre en dehors 
{
    var phrase = prompt("ecrivez une phrase");     //viable phrase 
    var lettre = prompt("quelle lettre recherchez vous ?!");  // la lettre rechercher 

    var compt= 0;   // compt c'est mon compteur initialiser 
    
    for(i=0; i<= phrase.length; i++)    // ma condition (de i=0 sur toute la longueur de la phrase, i suivant )
    {
        if(phrase[i]==lettre)    // si la phrase contient la lettre i 
        {
        compt++;  // j'incrémente mon compteur pour trouver le nombre de lettre 
        }
    }
    alert("le nombre de fois ou lettre"+"  "+lettre +"  "+"apparait est : "+compt); 
}
