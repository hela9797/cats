const header = document.querySelector("header");
window.addEventListener("scroll", ()=> {
  if (window.scrollY > 0) {
    header.classList.add("short");
  } else {
    header.classList.remove("short");
  }
});
var myIndex = 0;
      carousel();
      
      function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";  
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}    
        x[myIndex-1].style.display = "block";  
        setTimeout(carousel, 2000);
      }
