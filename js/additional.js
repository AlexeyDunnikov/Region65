$(".catalog-slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1380,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 860,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 540,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

//rent

let openRentBtns = document.querySelectorAll(".rent-popup__open-btn");

let closeRentBtn = document.querySelector(".rent-popup__close-btn");

let rentPopup = document.querySelector(".rent-popup");

for (let openRentBtn of openRentBtns) {
    openRentBtn.addEventListener("click", function () {
        rentPopup.classList.add("rent-popup--active");
        const topOffset = document.documentElement.scrollTop;
        rentPopup.style.top = topOffset + 100 + 'px';
    });
}

closeRentBtn.addEventListener("click", function () {
    rentPopup.classList.remove("rent-popup--active");
});

const contactForm = document.querySelector('.contacts__form');
contactForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const inputs = form.querySelectorAll('.contacts__form-input');
    inputs.forEach((input) => {
        input.classList.remove('error');
        const value = input.value;
        if(value.length === 0){
            input.classList.add('error');
        }
    });
});

var goTopBtn = document.querySelector('.back_to_top');

window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);

function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
        goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
        goTopBtn.classList.remove('back_to_top-show');
    }
}

function backToTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
    }
}

