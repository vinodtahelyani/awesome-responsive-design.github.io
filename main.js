function closeSlideMenu(){
    document.getElementById("nav-bar").style.zIndex = "-1";
    document.getElementById("nav-bar").style.backgroundColor = "transparent" 
    document.getElementById("side-nav").style.right = "-250px"          
}
function openSlideMenu(){
    document.getElementById("nav-bar").style.zIndex = "1";
    document.getElementById("nav-bar").style.backgroundColor = "rgba(0, 0, 0, .7)";  
    document.getElementById("side-nav").style.right = "0%"          
          
}