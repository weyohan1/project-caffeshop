$(function () {
  $("#accordion").accordion({
    header: "h3",
 
  });
});



  
$(function(){
  $('.main_menu').bxSlider({
  infiniteLoop: false,
  hideControlOnEnd: true,
  slideWidth: 306,
 
 

});
});







 


document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.event_viewbox img').src = btn.dataset.img;
  });
});





document.addEventListener("DOMContentLoaded", () => {


  var mainswiper = new Swiper(".mainSwiper", {
    pagination: {
      el: ".main-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".main-next",
      prevEl: ".main-prev",
    },
  });


    var menuswiper = new Swiper(".menuSwiper", {
effect: "coverflow",
grabCursor: true,
centeredSlides: true,
loop: true, 


coverflowEffect: {
rotate: 50,
stretch: 0,
depth: 100,
modifier: 1,
slideShadows: true,
},


pagination: {
el: ".menu-pagination",
clickable: true,
},


breakpoints: {
0: { 
slidesPerView: 1,
},
768:{
  slidesPerView: 2,
},
1204: { 
slidesPerView: 3,
},
},
})
});