
//background colour collection
let colours = ["#000000", "#A52A2A", "#0000FF","#A52A2A", "008000", "#FFD700", "#808080"]

function change_bgColor() 
{
  //To get each colour from the collection 
  let index = Math.floor(Math.random()*colours.length)
  let colourToUse = colours[index]
  document.getElementById("outer_div").style.backgroundColor = colourToUse
}

let myTimer = setInterval(display_btn , 5000)

function display_btn()
{
  document.getElementById("changer_btn").style.visibility = "visible" 
}


