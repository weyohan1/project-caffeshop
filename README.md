
## 📌 팀 프로젝트 caffeshop 웹사이트

![caffeshop](https://github.com/user-attachments/assets/913e3075-6ab6-4bd4-87f2-713d44587e0d)

📎 사이트 링크 : https://weyohan1.github.io/project-caffeshop/

<br>


▷ 팀 프로젝트로 진행한 카페 브랜드 할리스 커피 포트폴리오 웹사이트입니다.  

▷ 국내에서 오랜 역사를 가진 카페 브랜드 할리스 커피를 선정하여 기존 웹사이트를 분석하고 리뉴얼 프로젝트를 진행 하였습니다.

▷ 기존 웹사이트에서는 실제 사용자 경험이 다소 부족해 보이며, 반응형 웹이 적용되지 않아 다양한 디바이스에서의 접근성이 떨어지는 문제가 있어, 이를 개선하기 위해 UI 간격과 가독성을 재정비 하여 반응형 사이트로 리뉴얼 하였습니다.



<br>


## 📌 프로젝트 정보

- 개발 기간 : 2025.11 ~ 2025.12     
- 개발 인원 : 4명


### ✅시안 및 구성 

-GUI 가이드

<img src = "https://github.com/user-attachments/assets/e0c6ae78-a4d9-4592-b904-bc426e26f86a" width = "200px" />
<img src = "https://github.com/user-attachments/assets/19d63b37-47f0-4eeb-a515-df558861b9b2" width = "200px"/>
<img src = "https://github.com/user-attachments/assets/d72e33ab-0fef-4047-879c-4d2b85891fcd" width = "200px"/>
<img src = "https://github.com/user-attachments/assets/62a5f10b-504c-4b8b-9302-2fbcb0f64a33" width = "200px"/>



<br>

### ✅PC 버전

-메인 / 서브

<img src = "https://github.com/user-attachments/assets/effdfebc-59b3-4a4a-9576-84ccfe63b290" width = "300px"/>
<img src = "https://github.com/user-attachments/assets/59a480e5-a3d8-4110-b56c-e7d7f9d983c8" width = "300px"/>

<br>

### ✅Mobile 버전

-메인 / 서브

<img src = "https://github.com/user-attachments/assets/834df0ce-fa7b-4fb1-88ce-1725bb64f631" width = "300px"/>
<img src = "https://github.com/user-attachments/assets/803627b4-5d67-4b26-9ff8-dd63608a4636" width = "300px"/>




<br>


## 📌사용 스킬

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)


<br>


## 📌 프로젝트 주요 기능

- 반응형 내비게이션 및 레이아웃
- 상품 리스트 반응형 레이아웃 및 노출 개수 제어
- 모바일 아코디언 메뉴


<br>


## 📌 프로젝트 구조
```
project
 ├ index.html        #메인 페이지
 ├ sub_m.html        #서브 drink페이지   
 ├ sub_md.html       #서브 md 페이지
 ├ sub_food.html     #서브 food 페이지
 ├ sub_new.html      #서브 new 페이지
 │
 ├ css
 │   └ pmain.css 
 │   └ sub_m.css
 ├ js
 │   └ sub_m.js
 ├ img
 │   └ img
```

 <br>

## 📌 코드 리뷰


## ✅ 반응형 레이아웃

<img src = "https://github.com/user-attachments/assets/56c679c3-416e-48ab-90c5-a8f0f2cf398e"> <br>
<img src = "https://github.com/user-attachments/assets/cfa5e539-1a1e-4654-b84c-b25bb715ac3a"> <br>
<img src = "https://github.com/user-attachments/assets/f22cf683-a407-45c1-baab-4f17fbf11f2f">

- 미디어쿼리를 사용하여 구간에서 반응형 레이아웃이 적용되도록 구현했습니다.
- 601px~768px
- 769px ~ 1024px
- 1025px

<br>



##  ✅ 상품 리스트 반응형 레이아웃 및 노출 개수 제어
<img src = "https://github.com/user-attachments/assets/685d0c2a-88a9-48eb-86d1-85ae0dae5aaf"> <br>
<img src = "https://github.com/user-attachments/assets/93fcc74b-0a71-4477-8bdd-0db6f8775cb0"> <br>
<img src = "https://github.com/user-attachments/assets/80b7526f-5b27-4bf3-a283-73fcc813eb5f">

- calc()를 활용해 상품 너비를 계산하여 반응형 레이아웃에 맞게 구현했습니다.
- nth-child를 사용해 특정 개수 이상의 상품은 노출되지 않도록 제어했습니다.

<br>

##  ✅ 모바일 아코디언 메뉴

<img src = "https://github.com/user-attachments/assets/911e6b9a-c92e-4b15-9388-0c947b84402c">
<img src = "https://github.com/user-attachments/assets/8b777b21-19ae-4e3a-a11c-0a2ea1b7f10e">

- 모바일 특성을 고려하여 아코디언 메뉴를 선택 하였고, 화면 공간을 효율적으로 활용하고, 메뉴 간의 계층 구조를 그룹화하여 구현했습니다.


