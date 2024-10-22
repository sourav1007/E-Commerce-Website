
// __________________Hamburger code in mobile device_______________
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    })
}
if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active");
    })
}
// _____________________________________________________singleProduct.html code for changing images
let smallImg =document.getElementsByClassName("small-img");
let MainImg=document.getElementById("MainImg");
for(let i=0;i<smallImg.length;i++){
    smallImg[i].addEventListener("click",()=>{
        MainImg.src=smallImg[i].src;
    
    })
}




