function change_bgColor() 
{
  //background colour collection
  let colours = ["#000000", "#A52A2A", "#0000FF","#A52A2A", "008000", "#FFD700", "#808080"]
  //To get each colour from the collection 
  let index = Math.floor(Math.random()*colours.length)
  let colourToUse = colours[index]
  document.getElementById("outer_div").style.backgroundColor = colourToUse
}

let myTimer = setInterval(hide_btn , 5000)

function hide_btn()
{
 document.getElementById("changer_btn").style.visibility = "visible" 
}

window.alert("A button will appear after 5 secs")

