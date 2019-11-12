//-----------------------les fonctions -----------------------------------------------------
//------exo1------------------------------------------------

function produit(x, y) // ma premiere fonction appelée produit avec les variable x et y
{
   
    var resultat=x*y; // il va calculer le produit des variable x et y que j'ai demander en bas(rappeler)
    var cube=x*x*x; // le cube de la variable x demander en bas (rappeler )

    document.write("le produit est egal à : "+resultat+"<br>le cube de"+" " +x+ " "+"est : "+cube);// document write c'est du html on peut mettre des <br> voir aussi du texte
}
function afficheImg(image) //deuxieme fonction appelee afficheImage 
{
    document.write("<br>"+image); // je lui demande d'afficher l'image inserer dans var papillon 
    
}
function fonction() // fonction de rappel qui rappel mes variable et mes deux premiere fonction
{
    var  a= prompt("Entrez un nombre");
    var  b= prompt("Entrez un nombre");
    var papillon = "<img src=image/papillon.jpg><img>";// chemin de l'image 
    produit(a, b);
    afficheImg(papillon);
}

//---------------------exo2--------------------------

function fonction2()    // j'ai appelé fonction2() j'ai mis les variable phrase et lettre en dehors 
{
    var phrase = prompt("ecrivez une phrase");     //viable phrase 
    var lettre = prompt("quelle lettre recherchez vous ?!");  // la lettre rechercher 

    var compt= 0;   // compt c'est mon compteur initialiser 
    
    for(i=0; i<= phrase.length; i++)    // ma condition (de i=0 sur toute la longueur de la phrase, i suivant )
    {
        if(phrase[i]==lettre)    // si la phrase contient la lettre i 
        {
        compt++;  // j'incrimente je compte 
        }
    }
    alert("le nombre de fois ou lettre"+"  "+lettre +"  "+"apparait est : "+compt);
}

//-----------------------------exo3---------------------------
function multiFonction()
{
    var x, y; // rappel des variables x y dans l'exo 1 fonction
    myMot; // rappel du mot pour trouver le nombre de voyelles exo6 boucles 

    var selection = parseInt(prompt("1- Multiples"+"\n"+"2- Somme et Moyenne"+"\n"+"3- Recherche du nombre de voyelles"+"\n"+"4- Recherche du nombre des caractères suivants"+"\n"+"Entrez votre option :"))
    /*on declare var selection qui va prendre les expression 1- multiples, 2-somme et moyenne, 3-nombre de voyelles, 4-nombre de caractere ... au cas par cas
    dans le swtch case ou chaque case traite les conditions ..*/
    switch (selection) 
    {
        case 1: // recopier l'exo 5 boucles , les multiples de x à y (table de multiplication)
        
            var x=parseInt(prompt("saisir un nombre"));//demander de rentrer des nombres 
            var y=parseInt(prompt("saisir un nombre"));//demander de rentrer des nombres 
            i=x; //initialisation on commen par n*1
            while(i<=y)//condition tantque i est inferieur a n, on multiplie jusqu'a n
            {
            resultat=y*i; //condition on commence la mutiplication a partir du nombre saisi x
            document.write(+i+"  x  "+y+"="+resultat+"<br>");//<br> pour revenir a la ligne a chaque fois 
            i++;//actualisation
            }          
            break;
        case 2: // rappel exo 4 
            // calcule de la somme et la moyenne d'un des nombres tantque le nombre !=0 on continue a saisir les nombre.
            var somme=0; // initialisation de la somme
            var moyenne=0;// //de la moyenne
            var taille=0; // la taille veut dire le nombre de chiffre saisi
            do
            {
                var n=parseInt(prompt("saisir un nombre"));//demander de rentrer des nombres 
                taille++; // le nombre de fois qu'on saisi un nombre
                somme+=n;  // la somme des n egale
                moyenne=somme/(taille-1); // la moyenne est egale a somme / taille -1 
    
            }while(n!=0) // tantque on saisie pas 0 , on continue de saisir des chiffre 
                alert("la somme est :"+somme +"\n" + "la moyenne est :"+moyenne);

            break;
            
        case 3:// calcule du nombre de voyelles exo 6 boucles 
            var myMot=prompt("entrez un mot");//entrer un mot ,variable myMot
            var voyelle=0;
        
            for(i=0; i <= myMot.length; i++)//pour i=0 (initialisation), i<= a la longueur du mot myMot,
            {
                if(myMot[i]=="a" || myMot[i]=="e" || myMot[i]=="i" || myMot[i]=="o" || myMot[i]=="u" || myMot[i]=="y")
                //si le mot myMot contien ces voyelles a,e...   [i]tableau
                {
                voyelle++; 
                }
            }
            alert("le nombre de voyelle est:"+voyelle);
            break;
        case 4: //4- Recherche du nombre des caractères suivants exo2 fonction
            fonction2() // rappele du nom de la fonction    
            break;
    }
}
//------------------------------------------------------
//--------------exo4----------------
function strtok (str1, str2, n)  // fonction strtok avec les parametres str1(liste de mots), str2(le separateur entre les mots), n la position du mot a extraire 
{
    var mot=str1.split(str2);// split(str2) divise (coupe) la chaine de caractere str1 avec le séparateur str2 que j'ai defini en bas par espace " ".
    alert(mot[n-1]);//la position n du mots -1 car on a tuiliser un tableau et les tableau commence a 0
}

// solution 2---

function strtok2(strr1, strr2, n2)
{
    strr1=prompt("entrez une liste de mot ou de chiffre");// la liste de mots qu'on va diviser avec le split 
    strr2=" "; // le separateur de mot qui est ici espace
    n2=parseInt(prompt("entrez la position du mot à extraire"));// la position du mots à extraire
    var mot=strr1.split(strr2);// split(str2) divise (coupe) la chaine de caractere str1 avec le séparateur str2 que j'ai defini en bas par espace " ".
    alert(mot[n2-1]);//la position n du mots -1 car on a tuiliser un tableau et les tableau commence a 0
}



