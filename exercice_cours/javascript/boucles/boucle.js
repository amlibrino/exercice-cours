// afficher les nombre inferieur a 10

/*var i=0;
while(i<10)
{
    alert(i);
    i++;
}*/

// calculer la somme de 1 a 10
var somme=0;
var i;  // on déclare notre variable
for(i=0; i<=10; i++)//  initialisation + condition + incrémentation
    {
        (somme += i);
        console.log(somme);       // action
    }
       