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



//uses slide show
var usesSlidePrevBtn = document.getElementById('uses-slide-prev-btn')
var usesSlideNextBtn = document.getElementById('uses-slide-next-btn')
var usesSlideContainer = document.querySelector('.uses-slide-container')
var usesSlideItems = document.querySelectorAll('.uses-slide-item')
var usesSlideCounter = 1;
var usesSlideItemWidth = usesSlideItems[0].offsetWidth;
usesSlideContainer.style.transform = `translateX(${-1 * usesSlideCounter * usesSlideItemWidth}px)`

usesSlideNextBtn.onclick = function(){
    console.log(usesSlideCounter)
    if (usesSlideCounter >= usesSlideItems.length - 1) {
        return;
    };
    usesSlideContainer.style.transition = "transform 0.4s linear"
    usesSlideCounter ++;
    usesSlideContainer.style.transform = `translateX(${-1 * usesSlideCounter * usesSlideItemWidth}px)`
}
usesSlidePrevBtn.onclick = function(){
    if (usesSlideCounter <= 0)
    {
        return;
        
    }
    usesSlideContainer.style.transition = "transform 0.4s linear"
    usesSlideCounter --;
    usesSlideContainer.style.transform = `translateX(${-1 * usesSlideCounter * usesSlideItemWidth}px)`
}
usesSlideContainer.ontransitionend = function(){
    if (usesSlideItems[usesSlideCounter].id === 'lastClone'){
        usesSlideContainer.style.transition = 'none';
        usesSlideCounter = usesSlideItems.length - 2;
        usesSlideContainer.style.transform = `translateX(${-1 * usesSlideCounter * usesSlideItemWidth}px)`
        
    }
    if (usesSlideItems[usesSlideCounter].id === 'firstClone'){
        usesSlideContainer.style.transition = 'none';
        usesSlideCounter = usesSlideItems.length - usesSlideCounter;
        usesSlideContainer.style.transform = `translateX(${-1 * usesSlideCounter * usesSlideItemWidth}px)`
    
    }
}
 //transporter modal 
 var btnTransporter = document.getElementById('btn-transporter');
 var modalTransporter = document.querySelector('.modal-transporter')
 var btnModalTransporterClose = document.querySelector('.close-modal-transporter-btn')
 var transporterVd = document.querySelector('.transporter-vd')
 btnTransporter.onclick = function(){
   modalTransporter.style.display = 'block';
   header.style.display = 'none';
   content.style.display = 'none';
   footer.style.display = 'none';
   transporterVd.src='https://www.youtube.com/embed/4BXnE9yxFFY?autoplay=1'
 }
 btnModalTransporterClose.onclick = function(){
   modalTransporter.style.display = 'none';
   header.style.display = 'block';
   content.style.display = 'block';
   footer.style.display = 'block';
   transporterVd.src='https://www.youtube.com/embed/4BXnE9yxFFY'
 }
