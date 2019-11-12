// les multiples de x à y (table de multiplication)

var n = parseInt(prompt("saisir un nombre"));//demander de rentrer des nombres 
var x = parseInt(prompt("saisir un nombre"));//demander de rentrer des nombres 
var resultat;
for (i = 1; i <= n; i++) {
    resultat = i * x;
    console.log(+i + " x " + x + "=" + resultat + "<br>");//<br> pour revenir a la ligne a chaque fois 
}





/*i=1; //initialisation on commen par n*1
while(i<=n)//condition tantque i est inferieur a n, on multiplie jusqu'a n
{
    resultat=x*i; //condition on commence la mutiplication a partir du nombre saisi x
    document.write(+i+"X"+x+"="+resultat+"<br>");//<br> pour revenir a la ligne a chaque fois
    i++;//actualisation
}*/
