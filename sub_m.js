$(function () {
  $("#accordion").accordion({
    header: "h3",
    // heightStyle: "content",
    // collapsible: true
  });


  

  $('.main_menu').bxSlider({
  infiniteLoop: false,
  hideControlOnEnd: true,
  slideWidth: 306
 

});


    const modal = document.getElementById('modal');
    const openBtn = document.querySelectorAll('.open-btn');
    const closeBtn = document.querySelector('.close-btn');
//id modal로 설정한 값을 찾는다.
//open-btn 중복 되는 클라스 는 querselectorall로 사용
// close-btn 클라스 1개 사용시 querslelctoy 사용

//querySelector → id, class, 태그, 속성 등 모든 CSS 선택자 사용 가능

//getElementById → id 한정

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
    
//foreach는 반복문 각 동일한 버튼을 사용하려면 필요


        document.getElementById('modal-name').innerText =name;
        document.getElementById('modal-eng').innerText =eng;
        document.getElementById('modal-desc').innerText =desc;
        document.getElementById('modal-kcal').innerText = "칼로리: " + kcal;
        document.getElementById('modal-sugar').innerText = "당류: " + sugar;
        document.getElementById('modal-prot').innerText = "단백질: " + prot;
        document.getElementById('modal-fat').innerText = "포화지방: " + fat;
        document.getElementById('modal-na').innerText = "나트륨: " + na;
        document.getElementById('modal-caf').innerText = "카페인: " + caf;

        //영양소가 필요 없는 md상품 
        // 만약  kcal이 - 일치하면 getelementbyid (id전용)는 /modal-kcal의 스타일은 숨겨라 , 그렇지 않으면  보여라 뜻
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







