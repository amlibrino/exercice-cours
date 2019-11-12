

var formValid = document.getElementById("envoyer");// declation de variable pour la validation du formulaire appel de id"envoyer", 
var societe = document.getElementById("societe");
var missSoc = document.getElementById("missSoc");// variable missSoc pour recuperer id dans le span et pourvoir afficher un message d'erreur si champ mal saisi

var personne = document.getElementById("personne");
var missPer = document.getElementById("missPer"); // miss (missing) si on oublie de rensigner le champ

var adresse = document.getElementById("adresse");
var missAdr = document.getElementById("missAdr");

var cp = document.getElementById("cp");
var missCp = document.getElementById("missCp");

var ville = document.getElementById("ville");
var missVille = document.getElementById("missVille");

var mail = document.getElementById("mail");
var missMail = document.getElementById("missMail");

var tel = document.getElementById("tel");
var missTel = document.getElementById("missTel");

//declaration regex
var societeValid = new RegExp(/^.+[a-zA-Z-0-9]+$/);// creation du filtre "au moins 1 lettre ou un chiffre et caractere speciaux"
var personneValid= new RegExp(/^.+[a-zA-Z-0-9]+$/); // la regex /^\w+$/ pour renseigner au moins un caractere
var adresseValid= new RegExp(/^(\d+)(\D*)(\s)(\D+)(\s)(.+)$/g);// filtre adresse il divise en 6 bloc don le 1er chiffre obligatoire le second pour bis (facultatif) un espace obligatoire la voie /rue ou autre un autre espace obligatoire et le reste de l adresse

var mailValid = new RegExp(/^([\w-.]+)@((?:[\w]+.)+)([a-zA-Z]{2,4})/i);// filtre email il divise le mail en 4 blocs le 1er accepte lettre, chiffre et caractere le 2nd @ obligatoire 3em pour la sone de texte et le 4em demande un .et des caractéres
var cpValid = new RegExp(/^((?:[013-9]\d)|(?:2[0-9ABab]))\d{3}$/);// filtre du code postale il doit contenir 5 nombres sauf la corse qui contien des lettres
villeValid = new RegExp(/^.+[a-zA-Z-0-9]+$/); // peut contenir des chiffres et des lettres 
telValid = new RegExp(/^[0-9]{10}|[0-9\s.]{14}$/);

formValid.addEventListener("click", validation);// evenement click qui contient la foction validation

function validation(event)// si le cham est vide
{
    if(!societeValid.test(societe.value))// si la valeur de societe est manquante ou different de regex
    {
        event.preventDefault(); //annuler la validation Empêcher l’envoi du formulaire avec preventDefault() ;
        missSoc.textContent = 'Nom de la société manquant'; // afficher ce text d'erreur a la palce de * au span(html)
        missSoc.style.color = 'red'; // le style de couleur a afficher est rouge
    }
    else{
        missSoc.textContent="Ok";
        missSoc.style.color='green';
    }
    if(!personneValid.test(personne.value))// si la valeur de champ personne a contacter est manquante
    {
        event.preventDefault(); //annuler la validation
        missPer.textContent = 'Veillez renseigner le nom de la personne à contater'; // afficher ce text d'erreur a la palce de * au span(html)
        missPer.style.color = 'red'; // le style de couleur a afficher est rouge
    }else{
        missPer.textContent="Ok";
        missPer.style.color='green';
    }
    if(!adresseValid.test(adresse.value))// si la valeur de societe est manquante
    {
        event.preventDefault(); //annuler la validation
        missAdr.textContent = 'veillez saisir une adresse valide'; // afficher ce text d'erreur a la palce de * au span(html)
        missAdr.style.color = 'red'; // le style de couleur a afficher est rouge
    }else{
        missAdr.textContent="Ok";
        missAdr.style.color='green';
    }
    if(!cpValid.test(cp.value))// si la valeur de societe est manquante
    {
        event.preventDefault(); //annuler la validation
        missCp.textContent = ' Le code postal n est pas valide '; // afficher ce text d'erreur a la palce de * au span(html)
        missCp.style.color = 'red'; // le style de couleur a afficher est rouge
    }else{
        missCp.textContent="Ok";
        missCp.style.color='green';
    }
    if(!villeValid.test(ville.value))// si la valeur de societe est manquante
    {
        event.preventDefault(); //annuler la validation
        missVille.textContent = 'Saisir de nom de votre ville'; // afficher ce text d'erreur a la palce de * au span(html)
        missVille.style.color = 'red'; // le style de couleur a afficher est rouge
    }else{
        missSoc.textContent="Ok";
        missSoc.style.color='green';
    }
    if(!mailValid.test(mail.value))// si la valeur de societe est manquante
    {
        event.preventDefault(); //annuler la validation
        missMail.textContent = 'Veuillez rensigner une adresse mail valide '; // afficher ce text d'erreur a la palce de * au span(html)
        missMail.style.color = 'red'; // le style de couleur a afficher est rouge
    }else{
        missMail.textContent="Ok";
        missMail.style.color='green';
    }
    if(!telValid.test(tel.value))// si la valeur de societe est manquante
    {
        event.preventDefault(); //annuler la validation
        missTel.textContent = 'Veuillez rensigner un numero valide '; // afficher ce text d'erreur a la palce de * au span(html)
        missTel.style.color = 'red'; // le style de couleur a afficher est rouge
    }else{
        missTel.textContent="Ok";
        missTel.style.color='green';
}
var select = document.getElementById("select"); // variable select recupere les valeurs de select avec le getelementbyid...
select.addEventListener("click", choix);// declencher un evenement (element declencheur, la fonction qui va se delencher) click qui contient la foction choix

function choix()
{
    var champ  = document.getElementById("champs");// mon textarea qui va prendre les valeurs de select (liste deroulante)
    var option1 = document.getElementById("option1");// premiere opition qui prend le id choix num 1
    if(select.value==0)
    {
        option1.innerHTML="";// remplace la notation le la balise
    }
    champ.innerHTML=select.value;
}
}
