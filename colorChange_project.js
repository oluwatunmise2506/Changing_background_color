function change_bgColor() 
{
  //background colour collection
  let Colours = ["#000000" , "#A52A2A" , "#0000FF" ,"008000"]
  //To get each colour from the collection 
  let index = Math.floor(Math.random()*Colours.length)
  let ColourToUse = Colours[index]
  document.getElementById("outer_div").style.backgroundColor = ColourToUse
}