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
