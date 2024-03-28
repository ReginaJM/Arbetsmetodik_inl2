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





/* 

// Select all slides
const slides = document.querySelectorAll(".slide");
// current slide counter
let curSlide = 0;
// select next slide button
const nextSlide = document.querySelector(".btn-next");
// maximum number of slides
let maxSlide = slides.length - 1;

// loop through slides and set each slides translateX property to index * 100% 
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});


// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

//   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});


// select prev slide button
const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
}); 

 */




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

// Använd funktionen för att skapa två olika carousels
// setupCarousel(".slide-carousel1", ".btn-next-carousel1", ".btn-prev-carousel1");
setupCarousel(".slide-hiking", ".btn-next-hiking", ".btn-prev-hiking");
setupCarousel(".slide-camping", ".btn-next-camping", ".btn-prev-camping");
