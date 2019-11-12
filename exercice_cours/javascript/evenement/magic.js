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
}