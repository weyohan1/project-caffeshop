$(function () {
  $("#accordion").accordion({
    header: "h3",
  });


  

  $('.main_menu').bxSlider({
  infiniteLoop: false,
  hideControlOnEnd: true,
  slideWidth: 306
 

});


    const modal = document.getElementById('modal');
    const openBtn = document.querySelectorAll('.open-btn');
    const closeBtn = document.querySelector('.close-btn');

    openBtn.forEach(btn => {
      btn.addEventListener('click', function(){
        const name = btn.getAttribute('data-name')|| "-"; ;
        const eng = btn.getAttribute('data-eng')|| "-"; ;
        const desc = btn.getAttribute('data-desc')|| "-";;
        const kcal = btn.getAttribute('data-kcal')|| "-";;
        const sugar = btn.getAttribute('data-sugar')|| "-";;
        const prot = btn.getAttribute('data-prot')|| "-";;
        const fat = btn.getAttribute('data-fat')|| "-";;
        const na = btn.getAttribute('data-na')|| "-";;
        const caf = btn.getAttribute('data-caf')|| "-";;
    

        document.getElementById('modal-name').innerText =name;
        document.getElementById('modal-eng').innerText =eng;
        document.getElementById('modal-desc').innerText =desc;
        document.getElementById('modal-kcal').innerText = "칼로리: " + kcal;
        document.getElementById('modal-sugar').innerText = "당류: " + sugar;
        document.getElementById('modal-prot').innerText = "단백질: " + prot;
        document.getElementById('modal-fat').innerText = "포화지방: " + fat;
        document.getElementById('modal-na').innerText = "나트륨: " + na;
        document.getElementById('modal-caf').innerText = "카페인: " + caf;

  
    if (kcal === "-") { document.getElementById('modal-kcal').style.display = 'none'; } 
    else { document.getElementById('modal-kcal').style.display = 'block'; }

    if (sugar === "-") { document.getElementById('modal-sugar').style.display = 'none'; } 
    else { document.getElementById('modal-sugar').style.display = 'block'; }

    if (prot === "-") { document.getElementById('modal-prot').style.display = 'none'; } 
    else { document.getElementById('modal-prot').style.display = 'block'; }

    if (fat === "-") { document.getElementById('modal-fat').style.display = 'none'; } 
    else { document.getElementById('modal-fat').style.display = 'block'; }

    if (na === "-") { document.getElementById('modal-na').style.display = 'none'; } 
    else { document.getElementById('modal-na').style.display = 'block'; }

    if (caf === "-") { document.getElementById('modal-caf').style.display = 'none'; } 
    else { document.getElementById('modal-caf').style.display = 'block'; }

   
    modal.style.display = 'block';
  });
});
   
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });

});







