// ini untuk hamburger

  function addtogle() {
   var hamburger = document.getElementById("hamburger");

   hamburger.classList.toggle("hamburger-active");
   navMenu.classList.toggle("hidden");
}


// scrol navbar fix
window.onscroll = function(){
  const header = document.querySelector('header');
  const fixeNav = header.offsetTop;

  if(window.pageYOffset > fixeNav){
    header.classList.add("navbar-fixed");
  } else {
        header.classList.remove("navbar-fixed");
     
  }


}


