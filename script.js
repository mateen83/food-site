// open close toggle    
   
   
//    const BtnEl = document.querySelector(".btn-mbl-nav");
//     const HeaderEl = document.querySelector(".header");
//     BtnEl.addEventListener("click" ,function(){
// HeaderEl.classList.toggle("nav-open");
//     });

const BtnEl = document.querySelector(".btn-mbl-nav");
const HeaderEl = document.querySelector(".header");

// Toggle header when mobile nav button is clicked
BtnEl.addEventListener("click", function () {
  HeaderEl.classList.toggle("nav-open");
});

// Hide header when an anchor link or the header is clicked
HeaderEl.addEventListener("click", function (event) {
  if (event.target.tagName === "A" || event.target === HeaderEl) {
    HeaderEl.classList.remove("nav-open");
  }
});




// Select the hero section element to observe
const sectionHeroEl = document.querySelector(".hero-section");

// Create an IntersectionObserver to detect when the hero section is not visible
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0]; // Get the first entry
    console.log(ent); // Log the entry for debugging

    // If the hero section is out of view, add the sticky class to the body
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    // If the hero section is back in view, remove the sticky class
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null, // Observe the entire viewport
    threshold: 0, // Trigger when the target crosses the viewport
    rootMargin: "-80px", // Adjust the trigger point by 80px for earlier detection
  }
);

// Start observing the hero section
obs.observe(sectionHeroEl);





// Select the back-to-top button
const backToTopBtn = document.getElementById('backToTopBtn');

// Function to show or hide the button when scrolling
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    // Show button after scrolling down 200px
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// Scroll to the top when the button is clicked
backToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
 





// sticky header 
// const Hk = document.querySelector("#header-5");
// const header = Hk.offsetTop;
// console.log(sticky);

// window.addEventListener('scroll', ()=>{
//    if (window.pageYOffset > sticky){
//        Hk.classList.add('sticky');
//    }
//    else{
//        Hk.classList.remove('sticky');
//    }
// });


// // Get the section with ID 'header-5'
// const sectionHeader5 = document.querySelector("#header-5");
// // Get the header element
// const header = document.querySelector(".header");

// // Get the distance from the top of the page to the 'header-5' section
// const stickyPoint = sectionHeader5.offsetTop;

// window.addEventListener("scroll", () => {
//   // Check if the user has scrolled past 'header-5' section
//   if (window.pageYOffset > stickyPoint) {
//     header.classList.add("sticky"); // Add the sticky class
//   } else {
//     header.classList.remove("sticky"); // Remove sticky class when scrolling up
//   }
// });




