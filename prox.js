document.getElementById("id_business_version").innerHTML = "Business version = 2018.01.25.0";

window.addEventListener('userproximity', function(event) {
  if (event.near) {
    // let's power off the screen
    navigator.mozPower.screenEnabled = false;
  } else {
    // Otherwise, let's power on the screen
    navigator.mozPower.screenEnabled = true;
  }
});


