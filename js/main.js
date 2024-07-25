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

var swiper = new Swiper("#mySwiper", {
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  // styling of portfolio swiper 


  var swiperA = new Swiper("#swiperA", {
    slidesPerView: 5,
    spaceBetween: 15,
    loop: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });