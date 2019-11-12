//saisir un nom et un prenom et dire par la suite bnjr Mme ou Mr..
var reponse1 = window.prompt("Saisissez votre nom");
var reponse2 = window.prompt("Saisissez votre prenom");
if (window.confirm("etes vous un homme ?") == true) {
   //alert ("vous etes un homme");
   window.alert(" bonjour monsieur" + " " + (reponse1) + " " + (reponse2) + "\n" + ("beinvenue sur notre site"));
}
else {
   //alert ("vous etes une femme"); 
   window.alert(" bonjour Madame" + " " + (reponse1) + " " + (reponse2) + "\n" + ("beinvenue sur notre site"));
}
// window.prompt boite de dialogue, boite invite valeur a saisir par l'utilisateur
//window confirm pour le true or false, == pour la comparaison
// pour faire un saut de ligne on met +"\n"+
//window.alert pour afficher boite de dialogue et affecter la variable volue