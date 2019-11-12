
var magic = parseInt(Math.random() * 100);// nombre donner par l'ordi entre 0 et 100,

var i = 0;// initialisation de nombre de saisie ,variable du nombre de fois qu'on a compter (taper un nombre)
var saisie;// enregister le nombre deja saisi
var msg = ("le nombre a deviner est compris entre 0 et 100");//le message afficher 

do {
  saisie = parseInt(prompt(msg));//on demande de saisir un nombre, 
  i++;//i suivant actualisation et compte le nombre de fois qu'on a saisi un nombre 

  if (saisie < magic)// si nombresaisie et < au nombre a deviner
  {
    msg = ("c'est plus");//le message afficher c'est plus
  }
  else {
    msg = ("c'est moins");//si non le message afficher c'est moins
  }
} while (saisie != magic);//(condition) tantque le nombre saisi est different de magic 

alert("bravo, c'est gagner" + ("\n") + "vous avez saisi" + "  " + i + "  " + "nombre");