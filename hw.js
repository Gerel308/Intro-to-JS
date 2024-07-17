let checkpoint = 0
while (checkpoint <= 100) {

 
  if (checkpoint === 50) {
    document.getElementById("demo12").innerHTML = ("Half way there")
  } else if (checkpoint === 100) {
    document.getElementById("demo12").innerHTML = ("You made it")
  } else {
    document.getElementById("demo12").innerHTML = ("Checkpoint! "+ checkpoint)
  }
  checkpoint=checkpoint+10
}
document.getElementById("demo12").innerHTML = ("All, done!")