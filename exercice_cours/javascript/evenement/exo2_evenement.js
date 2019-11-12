
magic = parseInt(Math.random()*100);// nombre donner par l'ordi entre 0 et 100,
var saisie;// enregister le nombre deja saisi var saisie qui recupere la valeur id"textBox
console.log(magic) // afficher le nombre magic dans la console

function verif() // 
{
  var saisieElement = document.getElementById("textBox1");// var saisieElement qui prend la valeur saisie textbox1
  var labelElement=document.getElementById('label1'); // var labelElement qui prend le champs de text a afficher 
  console.log(saisieElement.value);

  if (saisieElement.value==magic)
  {
    labelElement.innerHTML= "Bien joué";
  }
  else if (saisieElement.value>magic)
  {
    labelElement.innerHTML= "Plus petit";
  }
  else if (saisieElement.value<magic)
  {
    labelElement.innerHTML= "Plus grand";
  }

}

/*
var magic = parseInt(Math.random()*100);

function verif()
{
   var magicElement=document.getElementById('textBox1') ;
   var labelElement=document.getElementById('label1')
   console.log(magic);
   console.log(magicElement.value) ;
   if (magicElement.value==magic)
    {
    labelElement.innerHTML= "Bien joué";
    }
   else if (magicElement.value>magic)
    {
    labelElement.innerHTML= "Plus petit";
    }
   else if (magicElement.value<magic)
    {
    labelElement.innerHTML= "Plus grand";
    }
}*/