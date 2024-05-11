let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');

const faqs = document.querySelectorAll(".faq");
faqs.forEach(faq => {
   faq.addEventListener("click", () => {
      faq.classList.toggle("active");
   })
})

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#search-btn').onclick = () =>{
   searchForm.classList.toggle('active');
   navbar.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#login-btn').onclick = () =>{
   loginForm.classList.toggle('active');
   navbar.classList.remove('active');
   searchForm.classList.remove('active'); 
};

document.querySelector('#info-btn').onclick = () =>{
   contactInfo.classList.add('active');
}


document.querySelector('#close-contact-info').onclick = () =>{
   contactInfo.classList.remove('active');
}


window.onscroll = () =>{
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
   contactInfo.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
   loop:true,
   grabCursor:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
     // Add other Swiper parameters here
  autoplay: {
   delay: 5000,
   disableOnInteraction: false,
 },
});

var swiper = new Swiper(".reviews-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
});

var swiper = new Swiper(".blogs-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".logo-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 15,
   slidesPerView: 3,  // set the default number of slides per view
   autoplay: {
     delay: 2000,
     disableOnInteraction: false
   },
   breakpoints: {
     450: {
       slidesPerView: 2
     },
     640: {
       slidesPerView: 3
     },
     768: {
       slidesPerView: 4
     }
   }
 });


 const faqQuestions = document.querySelectorAll('.faq-question');

 faqQuestions.forEach((question) => {
   question.addEventListener('click', () => {
     question.classList.toggle('active');
     const answer = question.querySelector('.faq-answer');
     if (question.classList.contains('active')) {
       answer.style.maxHeight = answer.scrollHeight + 'px';
     } else {
       answer.style.maxHeight = 0;
     }
   });
 });

 
 let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

const galleryContainer = document.querySelector('.gallery-container');

// Intersection Observer API
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2
}

const question = document.querySelector('.service-q');
question.addEventListener('click', toggleAnswer);