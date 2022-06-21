$(function () {
  //menu
  $('.header__open-menu').on('click', function(){
    $('.main-nav').toggleClass('main-nav--active');
  })

  //filter button
  $('body').on('click', function(evt){
    $className = evt.target.className;
    if ($className.indexOf('filter-button') >= 0){
      $(".catalog__filter").toggleClass("catalog__filter--active");
    }
    else{
      $(".catalog__filter").removeClass("catalog__filter--active");
    }
  })

  //application
  $(".services__content-button__leave").on('click', function(){
    $(".application").toggleClass('application--active');
  });
  $(".application__close-button").on('click', function(){
    $(".application").removeClass("application--active");
  });

  //services slider
  $(".services__slider").slick({
    dots: true,
    prevArrow:
      '<button class="services__slider-btn services__slider-btn--prev"><svg class="services__slider__btn-img"  width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0001 5.50001C12.0005 5.56581 11.9879 5.63104 11.963 5.69196C11.9381 5.75288 11.9014 5.80829 11.8551 5.85501C11.8086 5.90187 11.7533 5.93907 11.6924 5.96445C11.6314 5.98984 11.5661 6.00291 11.5001 6.00291C11.4341 6.00291 11.3687 5.98984 11.3078 5.96445C11.2469 5.93907 11.1916 5.90187 11.1451 5.85501L7.06009 1.77001C6.77884 1.48911 6.39759 1.33133 6.00009 1.33133C5.60259 1.33133 5.22134 1.48911 4.94009 1.77001L0.855093 5.85501C0.760941 5.94916 0.633243 6.00205 0.500093 6.00205C0.366942 6.00205 0.239244 5.94916 0.145093 5.85501C0.0509408 5.76086 -0.00195312 5.63316 -0.00195312 5.50001C-0.00195312 5.36686 0.0509408 5.23916 0.145093 5.14501L4.23009 1.06001C4.46232 0.82719 4.7382 0.642476 5.04192 0.516444C5.34565 0.390411 5.67126 0.325537 6.00009 0.325537C6.32893 0.325537 6.65453 0.390411 6.95826 0.516444C7.26198 0.642476 7.53786 0.82719 7.77009 1.06001L11.8551 5.14501C11.9014 5.19173 11.9381 5.24714 11.963 5.30805C11.9879 5.36897 12.0005 5.4342 12.0001 5.50001Z" fill="#5E6065"/></svg></button>',
    nextArrow:
      '<button class="services__slider-btn services__slider-btn--next"><svg class="services__slider__btn-img" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-0.00204372 0.828438C-0.00242423 0.762635 0.0101881 0.697404 0.0350704 0.636485C0.0599527 0.575566 0.0966158 0.520158 0.142957 0.473438C0.189439 0.426574 0.244739 0.389377 0.305668 0.363992C0.366598 0.338608 0.431951 0.325539 0.497956 0.325539C0.563962 0.325539 0.629315 0.338608 0.690245 0.363992C0.751174 0.389377 0.806475 0.426574 0.852956 0.473438L4.93796 4.55844C5.21921 4.83934 5.60045 4.99712 5.99796 4.99712C6.39546 4.99712 6.7767 4.83934 7.05796 4.55844L11.143 0.473438C11.2371 0.379286 11.3648 0.326392 11.498 0.326392C11.6311 0.326392 11.7588 0.379286 11.853 0.473438C11.9471 0.56759 12 0.695287 12 0.828438C12 0.961589 11.9471 1.08929 11.853 1.18344L7.76796 5.26844C7.53573 5.50126 7.25985 5.68597 6.95612 5.812C6.6524 5.93803 6.32679 6.00291 5.99796 6.00291C5.66912 6.00291 5.34351 5.93803 5.03979 5.812C4.73606 5.68597 4.46018 5.50126 4.22796 5.26844L0.142957 1.18344C0.0966158 1.13672 0.0599527 1.08131 0.0350704 1.02039C0.0101881 0.959473 -0.00242423 0.894241 -0.00204372 0.828438Z" fill="#5E6065"/></svg></button>',
  });

  //equipment slider

  $(".equipment__slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    fade: true,
    prevArrow:
      "<button class='equipment__slider__arrow equipment__slider__arrow--prev'><img class='equipment__slider__arrow-img' src='images/icons/arrow-prev.svg' alt='prev'></button>",
    nextArrow:
      "<button class='equipment__slider__arrow equipment__slider__arrow--next'><img class='equipment__slider__arrow-img' src='images/icons/arrow-next.svg' alt='next'></button>",
  });

  //application
  let leaveApplicationBtn = document.querySelector(
    ".services__content-button__leave"
  );

  let applicationWindow = document.querySelector(".application");
  let closeApplicationBtn = applicationWindow.querySelector(
    ".application__close-button"
  );
  leaveApplicationBtn.addEventListener("click", function () {
    applicationWindow.classList.toggle("application--active");
  });
  closeApplicationBtn.addEventListener("click", function () {
    applicationWindow.classList.remove("application--active");
  });



  let findNowPage = function () {
    return document.querySelector(
      ".equipment .slick-active .equipment__item__now-page"
    );
  };

  let findAllPages = function () {
    return document.querySelector(
      ".equipment .slick-active .equipment__item__all-pages"
    );
  };

  let findCurrentPageValue = function () {
    let currentSlickDot = document.querySelector(
      ".equipment .slick-dots .slick-active"
    );
    return currentSlickDot.textContent;
  };

  let findAllPagesValue = function () {
    let equipmentSlickDots = document.querySelectorAll(
      ".equipment .slick-dots button"
    );
    return equipmentSlickDots.length;
  };

  let updatePages = function () {
    let nowPage = findNowPage();
    let allPages = findAllPages();
    let currentPageValue = findCurrentPageValue();
    let currentAllPagesValue = findAllPagesValue();

    nowPage.textContent = currentPageValue;
    allPages.textContent = currentAllPagesValue;
  };

  let equipmentSlider = document.querySelector(".equipment__slider");

  equipmentSlider.addEventListener("click", function () {
    updatePages();
  });
});
