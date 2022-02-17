const content = document.getElementById('content');
const footer = document.getElementById('footer');
const header = document.getElementById('header')
// menu btn
 var menuBtn = document.querySelector('.menu-btn');
 var overlay = document.querySelector('.overlay');
 var menu = document.querySelector('.menu');
 menuBtn.onclick = function(){
     menuBtn.classList.toggle('active')
     if( menuBtn.classList.contains('active')){
        menu.style.animation = 'menuMove .5s ease forwards';
        overlay.style.display = 'block'
        menu.style.display='block'
    }
    else {
        menu.style.animation = 'menuMoveOut .9s ease forwards';
        menu.style.display='none'
        overlay.style.display='none'
    }
 }

 //header scroll
 var lastScrollTop = 0;
window.addEventListener("scroll", function(){ 
   var st = window.pageYOffset || document.documentElement.scrollTop;
   if (st > lastScrollTop){
      // downscroll code
      header.style.display='none';

   } else {
      // upscroll code
      header.style.display='block';
      header.style.backgroundColor = 'black'
      if (window.pageYOffset == 0 ){
          
      header.style.backgroundColor = 'transparent'
      }
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);
