/**
 * 
 * Functionality for menu buttons
 */
document.addEventListener("DOMContentLoaded", function() {
  
  const linkHiking = document.getElementById("linkHiking");
  const linkCamping = document.getElementById("linkCamping");
  
  const hikingSection = document.getElementById("hikingSection");
  const campingSection = document.getElementById("campingSection");


  linkHiking.addEventListener("click", function() {
    hikingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  linkCamping.addEventListener("click", function() {
    campingSection.scrollIntoView({ behavior: 'smooth', block: 'start'});
  });
});



/**
 * 
 * Functionality for To-top-btn scroll behavior
 */
document.addEventListener("DOMContentLoaded", function() {
  // Här lägger vi till eventlyssnare för klick på knappen
  document.getElementById("to-top-btn").addEventListener("click", function() {
      scrollToTop();
  });

  // Här lägger vi till eventlyssnare för scrollning
  window.addEventListener("scroll", function() {
      scrollFunction();
  });
});

function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("to-top-btn").style.display = "block";
    } else {
        document.getElementById("to-top-btn").style.display = "none";
    }
} 



/**
 * 
 * Function to set ut carousel collage
 */
function setupCarousel(slidesSelector, nextButtonSelector, prevButtonSelector) {
  const slides = document.querySelectorAll(slidesSelector);
  let curSlide = 0;
  const maxSlide = slides.length - 1;

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
  });


  document.querySelector(nextButtonSelector).addEventListener("click", function () {
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
  });

  document.querySelector(prevButtonSelector).addEventListener("click", function () {
    if (curSlide === 0) {
      curSlide = maxSlide;
    } else {
      curSlide--;
    }

    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
  });
}

setupCarousel(".slide-hiking", ".btn-next-hiking", ".btn-prev-hiking");
setupCarousel(".slide-camping", ".btn-next-camping", ".btn-prev-camping");
