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
// //modal
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
//  //transporter modal 
//  var btnTransporter = document.getElementById('btn-transporter');
//  var modalTransporter = document.querySelector('.modal-transporter')
//  var btnModalTransporterClose = document.querySelector('.close-modal-transporter-btn')
//  var transporterVd = document.querySelector('.transporter-vd')
//  btnTransporter.onclick = function(){
//    modalTransporter.style.display = 'block';
//    header.style.display = 'none';
//    content.style.display = 'none';
//    footer.style.display = 'none';
//    transporterVd.src='https://www.youtube.com/embed/wufXF5YKR1M?autoplay=1'
//  }
//  btnModalTransporterClose.onclick = function(){
//    modalTransporter.style.display = 'none';
//    header.style.display = 'block';
//    content.style.display = 'block';
//    footer.style.display = 'block';
//    transporterVd.src='https://www.youtube.com/embed/wufXF5YKR1M'
//  }
//  //iss-process
//  var processSteps = document.querySelectorAll('.process-step')
//  var processDescs = document.querySelectorAll('.process-desc')
//  var processContainers = document.querySelectorAll('.process-container')
//  var processImgs = document.querySelectorAll('.process-img')
// var processStation =document.querySelector('.iss-station-process')
//  processSteps.forEach(function(processStep,index){
//     processStep.onmouseover = function(){
//         processContainers.forEach(function(processContainer){
//             processContainer.classList.remove('active')
           
//         })
//         processContainers[index].classList.add('active')
//     }
//  })
// processStation.onmouseleave = function(){
//     processContainers.forEach(function(processContainer){
//         processContainer.classList.remove('active')
//     })
// }