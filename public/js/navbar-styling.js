navlink = document.getElementsByClassName("nav-link");
nav = document.getElementsByTagName("nav")[0];

$(window).on("scroll", function() {
  if ($(window).scrollTop()) {
    $(nav).addClass('black'); 
  } else {
    $(nav).removeClass('black');
  }
  nav.addEventListener("mouseover", function(){
    if(window.pageYOffset>200){
      for(let i = 0; i < navlink.length; i++){
        navlink[i].style.cssText =
        "color:white !important;text-shadow:1 1 1 #000000;";
      }
    }
  });
  
  nav.addEventListener("mouseleave", function() {
    if (window.pageYOffset > 500) {
      for (let i = 0; i < navlink.length; i++) {
        navlink[i].style.cssText = "color:white !important;text-shadow:1 1 1 #000000;";
      }
    }
  });
});




