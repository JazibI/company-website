let header_sect = document.querySelector("#header_sect");

let header_height = header_sect.offsetHeight;

let hero_sect = document.querySelector("#hero_sect");

hero_sect.style.paddingTop = header_height + "px";

//styling of navbar background color

window.addEventListener("scroll", function(){
    if(window.scrollY > 1){
        header_sect.classList.add("bg_gray");
    }else(
        header_sect.classList.remove("bg_gray")
    )
})


// styling of testimonial-slider section

var myswiper = new Swiper("#myswiper", {
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


 



const swiperA = new Swiper("#swiperA", {
    slidesPerView: 1,
    // spaceBetween: 60,
    loop: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 40
      }
    }
  });

  //styling of prod_sect section

  let prod_sect = document.querySelector("#prod_sect");
  
  let podSectHalfHeight = prod_sect.offsetHeight / 2;

  let portfolioSect = document.querySelector("#portfolioSect");

  portfolioSect.style.marginBottom = podSectHalfHeight + "px";

  let newsSect = document.querySelector("#newsSect");

  newsSect.style.paddingTop = podSectHalfHeight + "px";

  // let header_height = header_sect.offsetHeight;

//   let dateInput = document.querySelectorAll("#dateInput")

//   flatpickr(dateInput, {
//     dateFormat: "Y-m-d", // Adjust the format as needed
// });


document.addEventListener("DOMContentLoaded", function() {
  let dateInput = document.getElementById("dateInput");

  // Event listener to focus on the input to trigger the date picker
  dateInput.addEventListener("click", function() {
      dateInput.focus(); // Programmatically focus the input to show the date picker
  });
});



 //styling of video_sect

 let faqsSect = document.querySelector("#faqsSect");

 let videoSect = document.querySelector("#videoSect");
  
 let videoSectHeight = vidHeight.offsetHeight / 2;


 faqsSect.style.marginBottom = videoSectHeight + "px";

//  let newsSect = document.querySelector("#newsSect");

videoSect.style.paddingTop = videoSectHeight + "px";

