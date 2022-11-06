 var interval=setInterval(profcolor, 500);
function profcolor(){
     let a=document.getElementById("profile");
     a.style.backgroundColor=a.style.backgroundColor == "lightblue" ? "pink" : "lightblue";
}
function give(evt,field) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    document.getElementById("intro").style.display="none";
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(field).style.display = "block";
    evt.currentTarget.className += " active";
  }