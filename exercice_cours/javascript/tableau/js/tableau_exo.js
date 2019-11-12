// exo 1 tableau______________________________________________
/* créer un tableau, dont la taille est saisie au clavier, l'utilisateur doit rentrer les différentes valeurs du tableau.
 programme doit afficher le contenu du tableau.*/

function tableau1()
{
    var n = parseInt(prompt("saisir le nombre de case de votre tableau")); // le nombre de valeurs que notre tableau va prendre 
    var myTableau = new Array(n); /// cree un tableau avec le nombre de valeurs n 
    for(var i = 0; i< n; i++)   // on utilise la boucle for pour pour demander de saisir les valeurs par par une 
    {
        myTableau = prompt("saisir les valeurs de votre tableau"); // saisir les valeurs du tableau 
        console.log(myTableau); // afficher les valeurs du tableau dans la console
    }
}

// exo2______________________________________

function menu()  // déclaration de fonctions
{
    GetInteger();
    InitTab(y);
    SaisieTab(y, myTable);
    AfficheTab(myTable, y);
    RechercheTab(myTable);
    InfoTab(somme, myTable,y);

    function GetInteger() // fonction1 pour declarer le nombre 
    {
        y = parseInt(prompt("saisir le nombre de postes souhaité")); // saisir le nombre de postes
    }
    function InitTab(y) // cree et initialiser le tableau avec le nombre de poste definie avant dans fnction1
    {
        myTable = new Array(y); // cree un tableau avec le nombre de valeurs n 
    }
    function SaisieTab(y, myTable)  // saisir les different postes du tableau
    {
        somme = 0;
        for(var i = 0; i< y; i++)   // on utilise la boucle for pour pour demander de saisir les valeurs par par une (a la suite)
        {
            myTable[i] = parseInt(prompt("saisir les valeurs de votre tableau")); // saisir les valeurs du tableau 
            somme+= myTable[i]; // pour calculer la somme des nombres saisi
        }
        console.log("somme :"+somme);
    }   
    function AfficheTab(myTable, y) //pour afficher les postes du tableau
    {
        for(var i = 0; i< y; i++)   // on utilise la boucle for pour pour demander de saisir les valeurs par par une (a la suite)
        {
            console.log(myTable[i]); // afficher les valeurs du tableau dans la console
        }  
    }
    function RechercheTab(myTable)  // afficher le contenu d'un poste dans le rang est saisi au clavier
    {
        let x = parseInt(prompt("saisir le rang du nombre rechercher")); // x est l'index du contenu rechercher qu'on va demander a l'utilisateur de saisir 
        console.log("le contenu du rang : "+x+" est : "+myTable[x-1]); // il va l'afficher dans la console avec myTable[x-1]

    }
    function InfoTab(somme, myTable,y)  // afficher le maximum et la moyenne des poste saisi
    {
        let moyenne = (somme/y); // calcule de la moyenne qui est la somme des i de myTable / y nombre de valeur du tableau
        let max = 0;
        for(var i = 0; i< y; i++)   // on utilise la boucle for pour pour demander de saisir les valeurs par par une (a la suite)
        {
            if(max<myTable[i]) // si max est inferieur au valeur de ma table
            {
                max = myTable[i]; // donc max = mytable[i]
            }
        }
        console.log("la moyenne est : "+moyenne+" le max est : "+max);  // affichage dans la console    
    }
}
// ____correction____________

function GetInteger(){
    int = parseInt(prompt("Entrez un entier au clavier"));
}

function InitTab(){
    var nbPost = parseInt(prompt("Entrez le nombre de postes"));
    myTab = new Array(nbPost); //Initialisation de tableau
}

function SaisieTab(myTab){
    for(let i = 0; i < myTab.length; i++){
        myTab[i]= parseInt(prompt("Entrez un poste"));
    }
    return myTab;
}

function AfficheTab(myTab){ 
    console.log(myTab);
}

function RechercheTab(myTab){
    let poste= parseInt(prompt("Quel rang afficher ?"));
    poste--; 
    console.log(myTab[poste]); // poste-1 car le tab commence à 0
}

var somme = 0; 
var max = 0;
var moyenne = 0;
function InfoTab(myTab,somme){
    for (i = 0; i < myTab.length ; i++){    // pour chaque case du tab
        somme+=myTab[i];
        if(max<myTab[i]){   //Verifie si il ya un nombre superieur au max actuel
            max=myTab[i];   // si oui le remplace sinon continu le for jusqu'a la fin du tab
        }
    }
    moyenne = somme/myTab.length;
    console.log(moyenne);
    console.log("Poste max :"+max+"\n Moyenne poste :"+moyenne);
}

function tab2(){
    GetInteger();
    InitTab();
    SaisieTab(myTab);
    AfficheTab(myTab);
    RechercheTab(myTab);
    InfoTab(myTab,somme);
}
// exo 3 __________________________________
//Ecrire le programme qui réalise le tri à bulles.
/*
function tri ()
{
    tableau1();
    while (myTableau[i]<i+1)
    {

    }
}*/

// exo4__________________________________

function tableau()
{
    tableau = Array[666, 1, 7, 69, 33, 13];
    j=1;
    n = Array.length;
    while (j!=n)
    {
        i=j-1; 
        var tmp = Array[j];
        while ( i> -1 && Array[i]> tmp)
        {
            i= i-1;
            Array[i+1]=Array[i];
        }
        Array[i+i]=tmp;
        j=j+1;
    }
}