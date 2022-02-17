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


 window.onscroll = function(){
    if (window.pageYOffset >=200 && window.pageYOffset <= 890){
        const counters = document.querySelectorAll('.counter')
    counters.forEach(function(counter){
        counter.innerHTML = '0';
        const update = function(){
            const data = +counter.getAttribute('data-set')
            const increment = Math.ceil(data/200)
            const currentValue = + counter.innerHTML ;
            if (currentValue < data ){
                counter.innerHTML = `${currentValue + increment}`;
                setTimeout(update,10)
            }
        }
        update()
    })
    }

 }
//SLIDER
var slideDots = document.querySelectorAll('.slide-dot')
var slideItems = document.querySelectorAll('.slide-item')
var slideMain = document.getElementById('slide-main')
var itemWidth = slideItems[0].offsetWidth;
var preVehicleBtn = document.querySelector('.vehicle-pre-btn')
var nextVehicleBtn = document.querySelector('.vehicle-next-btn')
var positionX = 0
var index = 0
var slideLength = slideItems.length;
slideDots.forEach(function(slideDot){
    slideDot.onclick = function(){
        slideDots.forEach(function(sd){
            sd.classList.remove('active')
        })
        slideDot.classList.add('active')
        var slideIndex = parseInt(slideDot.dataset.index);
         index = slideIndex;
         positionX = -1 * index * itemWidth
        if (index == 0){
            positionX = 0;
        }
        slideMain.style.transform = `translateX(${positionX}px)`
    }
})
nextVehicleBtn.onclick = function(){
    if (index >= slideLength - 1){
        index = slideLength - 1;
        return
    }
     positionX = positionX - itemWidth;
    slideMain.style.transform = `translateX(${positionX}px)`
    index++;
    slideDots.forEach(function(slideDot){
        slideDot.classList.remove('active')
    })
    slideDots[index].classList.add('active')
 
}
preVehicleBtn.onclick = function(){
    if (index <= 0){
        index = 0;
        return
    }
     positionX = positionX + itemWidth;
    slideMain.style.transform = `translateX(${positionX}px)`
    index--;
    slideDots.forEach(function(slideDot){
        slideDot.classList.remove('active')
    })
    slideDots[index].classList.add('active')
}
//landing
var landingNavLeft = document.querySelector('.landing-nav-left')
var landingNavRight = document.querySelector('.landing-nav-right')

var landingDrone = document.querySelector('.landing-drone')
var landingZone = document.querySelector('.landing-zone')
landingNavLeft.onclick = function(){
    landingNavLeft.classList.add('active')
    landingNavRight.classList.remove('active')
    landingDrone.style.display = 'block'
    landingZone.style.display='none'
}
landingNavRight.onclick = function(){
    landingNavRight.classList.add('active')
    landingNavLeft.classList.remove('active')
    landingDrone.style.display = 'none'
    landingZone.style.display='block'
}