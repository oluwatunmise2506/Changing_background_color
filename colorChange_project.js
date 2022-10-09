function change_bgColor() 
{
  //background colour collection
  let Colours = ["#000000" , "#A52A2A" , "#0000FF" , "#A52A2A" ,"008000" , "#FFD700" , "#808080"]
  //To get each colour from the collection 
  let index = Math.floor(Math.random()*Colours.length)
  let ColourToUse = Colours[index]
  document.getElementById("outer_div").style.backgroundColor = ColourToUse
}

let myTimer = setInterval(hide_btn , 5000)

function hide_btn()
{
 document.getElementById("changer_btn").style.visibility = "visible" 
}

window.alert("A button will appear after 5 secs")


let text = " "
let i = 2
function myNumbers()
{
  while (i<10)
  {
   text += i + "<br>"; i++ 
  }
}
console.log(myNumbers);
