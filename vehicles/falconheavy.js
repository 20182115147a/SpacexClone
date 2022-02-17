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
//modal
//  var btnStarlink = document.getElementById('btn-starlink');
//  var modal = document.querySelector('.modal')
//  var btnModalClose = document.querySelector('.close-modal-btn')
//  var starlinkVd = document.querySelector('.starlink-vd')
//  btnStarlink.onclick = function(){
//    modal.style.display = 'block';
//    header.style.display = 'none';
//    content.style.display = 'none';
//    footer.style.display = 'none';
//    starlinkVd.src='https://www.youtube.com/embed/Yov854ZT1lg?autoplay=1'
//  }
//  btnModalClose.onclick = function(){
//    modal.style.display = 'none';
//    header.style.display = 'block';
//    content.style.display = 'block';
//    footer.style.display = 'block';
//    starlinkVd.src='https://www.youtube.com/embed/Yov854ZT1lg'
//  }
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
   transporterVd.src='https://www.youtube.com/embed/A0FZIwabctw?autoplay=1'
 }
 btnModalTransporterClose.onclick = function(){
   modalTransporter.style.display = 'none';
   header.style.display = 'block';
   content.style.display = 'block';
   footer.style.display = 'block';
   transporterVd.src='https://www.youtube.com/embed/A0FZIwabctw'
 }

 window.onscroll = function(){
    if (window.pageYOffset >=300 && window.pageYOffset <= 890){
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

//vehicle-slide
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
//slider-nav-active
var sliderNavItems1 = document.querySelectorAll('.slider-nav-item1')
var sliderDescs1 = document.querySelectorAll('.slider-desc1')
var imgUrls1 = ['../assets/img/falcon_heavy_slide2.webp','../assets/img/falcon_heavy_slide2a.webp'
,'../assets/img/falcon_heavy_slide2b.webp']
sliderNavItems1.forEach(function(sliderNavItem,index){
    sliderNavItem.onclick = function(){
        sliderNavItems1.forEach(function(sliderNavItem1,index2){
            sliderNavItem1.classList.remove('active')
            slideItems[1].style.backgroundImage = `url(${imgUrls1[index]})`
            sliderDescs1[index2].classList.remove('active')
        })
        sliderNavItem.classList.add('active')
       
        sliderDescs1[index].classList.add('active')
    }
})
//slide-nav-aictive2
// var sliderNavItems2 = document.querySelectorAll('.slider-nav-item2')
// var sliderDescs2 = document.querySelectorAll('.slider-desc2')
// var imgUrls2 = ['../assets/img/falcon_slide5.webp','../assets/img/falcon_slide5a.webp']
// sliderNavItems2.forEach(function(sliderNavItem,index){
//     sliderNavItem.onclick = function(){
//         sliderNavItems2.forEach(function(sliderNavItem1,index2){
//             sliderNavItem1.classList.remove('active')
//             slideItems[4].style.backgroundImage = `url(${imgUrls2[index]})`
//             sliderDescs2[index2].classList.remove('active')
//         })
//         sliderNavItem.classList.add('active')
       
//         sliderDescs2[index].classList.add('active')
//     }
// })
//vehicle engine
var sliderNavItems3 = document.querySelectorAll('.slider-nav-item3')
var sliderDescs3 = document.querySelectorAll('.slider-desc3')
var vehicleEngine = document.querySelector('.vehicles-engines')
var imgUrls3 = ['../assets/img/merlink1.webp','../assets/img/merlink2.webp']
sliderNavItems3.forEach(function(sliderNavItem,index){
    sliderNavItem.onclick = function(){
        sliderNavItems3.forEach(function(sliderNavItem1,index2){
            sliderNavItem1.classList.remove('active')
            vehicleEngine.style.backgroundImage = `url(${imgUrls3[index]})`
            sliderDescs3[index2].classList.remove('active')
        })
        sliderNavItem.classList.add('active')
       
        sliderDescs3[index].classList.add('active')
    }
})
//last slider show
var lastSliderPrevBtn = document.getElementById('last-slider-prev-btn')
var lastSliderNextBtn = document.getElementById('last-slider-next-btn')
var lastSliderContainer = document.querySelector('.last-slider-container')
var lastSliderItems = document.querySelectorAll('.last-slider-item')
var lastSliderCounter = 1;
var lastSliderItemWidth = lastSliderItems[0].offsetWidth;
lastSliderContainer.style.transform = `translateX(${-1 * lastSliderCounter * lastSliderItemWidth}px)`

lastSliderNextBtn.onclick = function(){
    console.log(lastSliderCounter)
    if (lastSliderCounter >= lastSliderItems.length - 1) {
        return;
    };
    lastSliderContainer.style.transition = "transform 0.4s linear"
    lastSliderCounter ++;
    lastSliderContainer.style.transform = `translateX(${-1 * lastSliderCounter * lastSliderItemWidth}px)`
}
lastSliderPrevBtn.onclick = function(){
    if (lastSliderCounter <= 0)
    {
        return;
        
    }
    lastSliderContainer.style.transition = "transform 0.4s linear"
    lastSliderCounter --;
    lastSliderContainer.style.transform = `translateX(${-1 * lastSliderCounter * lastSliderItemWidth}px)`
}
lastSliderContainer.ontransitionend = function(){
    if (lastSliderItems[lastSliderCounter].id === 'lastClone'){
        lastSliderContainer.style.transition = 'none';
        lastSliderCounter = lastSliderItems.length - 2;
        lastSliderContainer.style.transform = `translateX(${-1 * lastSliderCounter * lastSliderItemWidth}px)`
        
    }
    if (lastSliderItems[lastSliderCounter].id === 'firstClone'){
        lastSliderContainer.style.transition = 'none';
        lastSliderCounter = lastSliderItems.length - lastSliderCounter;
        lastSliderContainer.style.transform = `translateX(${-1 * lastSliderCounter * lastSliderItemWidth}px)`
    
    }
}
