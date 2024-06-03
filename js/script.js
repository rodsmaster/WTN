function menuResponsivo() {
  var x = document.getElementById("menu_respon");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


