$(function () {
  $("#accordion").accordion({
    header: "h3",
    // heightStyle: "content",
    // collapsible: true
  });
});



  
$(function(){
  $('.main_menu').bxSlider({
  infiniteLoop: false,
  hideControlOnEnd: true,
  slideWidth: 306,
 
 

});
});















// new Swiper('.mainSwiper', {
//   slidesPerView: 1,
//   autoHeight: false,     // 중요
//   observer: true,
//   observeParents: true
// });





// document.addEventListener('DOMContentLoaded', () => {

//   const btns = document.querySelectorAll('.btn');
//   const event_viewbox = document.querySelector('.event_viewbox');

//   btns.forEach(btn => {
//     btn.addEventListener('click', () => {

//       // 지금 열려 있으면 닫기
//       if (event_viewbox.style.display === 'block') {
//         event_viewbox.style.display = 'none';
//       } 
//       // 닫혀 있으면 열기
//       else {
//         event_viewbox.style.display = 'block';
//       }

//     });
//   });

// });




document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.event_viewbox img').src = btn.dataset.img;
  });
});