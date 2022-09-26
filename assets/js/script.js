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


// blob js start
var radius = 8;
TweenMax.staggerFromTo('.blob', 4, {
cycle: {
  attr: function (i) {
    var r = i * 90;
    return {
      transform: 'rotate(' + r + ') translate(' + radius + ',0.1) rotate(' + (-r) + ')'
    }
  }
}
}, {
cycle: {
  attr: function (i) {
    var r = i * 90 + 360;
    return {
      transform: 'rotate(' + r + ') translate(' + radius + ',0.1) rotate(' + (-r) + ')'
    }
  }
},
ease: Linear.easeNone,
repeat: -1
});
