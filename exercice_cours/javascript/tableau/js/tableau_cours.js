
//--------------cours______
function cours(myTableau)
{
    myTable = ["pomme", "poire", "banane"]; // Données de type chaîne
    myTableau = [123, 456, 789]; // Données de type entier
    console.log(myTableau);//afficher myTableau dans la console
    console.log(myTable);// afficher myTable dans la console

    var myTableau = new Array(); // Tableau vide
    var myTableau = Array(); // Tableau vide
    var myTableau = new Array(5); // Tableau vide qui contiendra 5 éléments
    var myTableau = Array(5); // Tableau vide qui contiendra 5 éléments
    var myTableau = new Array("pomme", "poire", "banane"); //Tableau avec données
    var myTableau = Array("pomme", "poire", "banane"); // Tableau avec données

}
La fonction length (= longueur) retourne le nombre d’éléments dans un tableau :
var myTableau = ["pomme", "poire", "banane", "fraise", "abricot"];
var nb = myTableau.length ;
console.log("Le tableau contient "+nb+ "éléments"); // Affiche : 5

var myTableau = ["pomme", "poire", "banane", "fraise", "abricot"];
for (var i = 0; i < myTableau.length; i++)
{
 console.log("Fruit : "+myTableau[i]);
}


1) Créer un tableau
var fruits = ['Apple', 'Banana'];
console.log(fruits.length);// 2

2)Accéder (via son index) à un élément du tableau
var first = fruits[0];// Apple
var last = fruits[fruits.length - 1];// Banana

3)Boucler sur un tableau
fruits.forEach(function(item, index, array) {
console.log(item, index);});// Apple 0   // Banana 1

4)Ajouter à la fin du tableau
var newLength = fruits.push('Orange');// ["Apple", "Banana", "Orange"]

5)Supprimer le dernier élément du tableau
var last = fruits.pop(); // supprime Orange (à la fin)   // ["Apple", "Banana"];

6)Supprimer le premier élément du tableau
var first = fruits.shift(); // supprime Apple (au début) // ["Banana"];

7)Ajouter au début du tableau
var newLength = fruits.unshift('Strawberry') // ajoute au débutn// ["Strawberry", "Banana"];

8)Trouver l'index d'un élément dans le tableau
fruits.push('Mango'); // ["Strawberry", "Banana", "Mango"]
var pos = fruits.indexOf('Banana'); // 1

9)Supprimer un élément par son index
var removedItem = fruits.splice(pos, 1); // supprime 1 élément à la position pos // ["Strawberry", "Mango"]

9)Supprimer des éléments à partir d'un index
var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetables); // ["Cabbage", "Turnip", "Radish", "Carrot"]
var pos = 1, n = 2;
10)var removedItems = vegetables.splice(pos, n); // n définit le nombre d'éléments à supprimer,// à partir de la position pos
console.log(vegetables); // ["Cabbage", "Carrot"] (le tableau d'origine est changé)
console.log(removedItems); // ["Turnip", "Radish"] (splice retourne la liste des éléments supprimés)

2) var arr = ["le premier élément", "le deuxième élément", "le dernier élément"];  
console.log(arr[0]);             // affiche "le premier élément"    
console.log(arr[1]);             // affiche "le deuxième élément"  
console.log(arr[arr.length - 1]);// affiche "le dernier élément"

var fruits = ["pomme", "poire", "banane", "fraise", "abricot"];
concat  // Réunit deux tableaux.
Exemple
var fruits = ["pomme", "poire", "banane", "fraise", "abricot"];
var autres = ["sucre", "farine", "oeufs"];
var ingredients = fruits.concat(autres);
indexOf       // Retourne le premier indice pour lequel on trouve l’élément dans un tableau (occurrence) :
fruits.indexOf('banane') => retourne 2
lastIndexOf  // Retourne le dernier indice de l’occurrence de l’élément dans un tableau :
var fruits = ["pomme", "poire", "banane", "fraise", "banane",
"abricot"];
fruits.lastIndexOf("banane"); => retourne 4 (position du dernier banane,
celui en rouge)
pop     //supprime le dernier élément d'un tableau et retourne cet élément. Cette méthode
modifie la longueur du tableau :
last = fruits.pop();
console.log(last) => retourne ‘abricot’ et le supprime du tableau
push // ajoute un ou plusieurs éléments à la fin d’un tableau et retourne la nouvelle taille du
tableau.
var nb = fruits.push('mangue', 'prune');
Le nouveau tableau sera le suivant :
fruits = ["pomme", "poire", "banane", "fraise", "abricot",
'mangue', 'prune'];
et la variable nb vaudra 7.
shift Retourne le 1er élément d’un tableau et le supprime.
fruits.shift(); => retourne ‘pomme’
sort Tri le tableau en ordre ascendant :
fruits.sort(); => retourne abricot, banane, fraise, poire, pomme 
8
split // Découpe une chaîne selon un caractère passé en argument, le résultat de cette « découpe » sera un tableau :
Exemple :
var ladate = '15/05/2018';
var myTableau = ladate.split('/');
Le tableau myTableau contiendra les valeurs 15, 05 et 2018.