function toggleStyleSheet(){
  var currStyle = document.getElementById("mainStyleSheet");

  var currName = currStyle.getAttribute("href");
  
  if(currName == "style1.css") {
      currStyle.setAttribute("href", "style2.css")
  }
  else {
      currStyle.setAttribute("href", "style1.css")
  }

  var currName = currStyle.getAttribute("href");

  localStorage.setItem("mainStyleSheet", currName);
  
}


window.onload = function(){

  var currName = localStorage.getItem("mainStyleSheet", currName);
  
  var currStyle = document.getElementById("mainStyleSheet");
  
  currStyle.setAttribute("href", currName);
}