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