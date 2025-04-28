let showTrue = false;

setInterval(() => {
  showTrue = !showTrue; // toggle between true and false
  if (showTrue) {
    document.getElementById("myVar").innerHTML = "True";
  } else {
    document.getElementById("myVar").innerHTML = "False";
  }
}, 1000); // change every 1000 milliseconds (1 second)
