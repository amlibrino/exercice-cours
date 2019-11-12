var mar = prompt("Etes-vous marié(e)? (oui/non)");
var sal = parseInt(prompt("Combien touchez-vous par mois?"));
var enf = parseInt(prompt("Avez-vous des enfants?"));
var part = 0;

if (sal<1200)
{
  if (mar==oui)
  {//marié
    part = 25+(10*enf)+10;
  }
  else
  { //celibataire
  part = 20+(10*enf)+10;
}
}
else
{// salaire >1200
  if (mar==oui){//marié sans salaire faiblard
    part = 25+(10*enf);
  }else{ //celibataire sans salaire faiblard
  part = 20+(10*enf);
}
}
//Pour limiter au maximum de 50%
  if(part>50){
    part=50;
  }
  alert("Le taux de participation finale est de "+part+" %.");
  

