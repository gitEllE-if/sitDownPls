"use strict";var swiper1=new Swiper("#swiper1",{loop:!0,loopedSlides:3,speed:500,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}}),swiper2=new Swiper("#swiper2",{slidesPerView:1,slidesPerGroup:1,spaceBetween:32,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1,slidesPerGroup:1},768:{slidesPerView:2,slidesPerGroup:2},1024:{slidesPerView:3,slidesPerGroup:3},1440:{slidesPerView:3,slidesPerGroup:3}}}),swiper3=new Swiper("#swiper3",{slidesPerView:1,spaceBetween:32,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1024:{slidesPerView:3},1440:{slidesPerView:2}}});tippy("#my-tooltip",{content:" Реплицированные с зарубежных источников, исследования формируют глобальную сеть."});var validationFeedback=new JustValidate("#form");validationFeedback.addField("#name",[{rule:"required",errorMessage:"введите имя"},{rule:"minLength",value:2,errorMessage:"не менее 2 символов"},{rule:"maxLength",value:30,errorMessage:"не более 30 символов"}]).addField("#phone",[{rule:"required",errorMessage:"введите номер телефона"},{rule:"minLength",value:6,errorMessage:"не менее 6 цифр"},{rule:"maxLength",value:10,errorMessage:"не более 10 цифр"}]).addField("#email",[{rule:"required",errorMessage:"введите почту"},{rule:"email",errorMessage:"некорректное значение"}]);