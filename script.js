/*Carousel */
const carousel = document.querySelector(".carousel");
const botaoSeta = document.querySelectorAll(".wrapper-carousel i");
const primerioCard = carousel.querySelector(".card-carousel").offsetWidth;

botaoSeta.forEach(btn =>{
    btn.addEventListener("click", () =>{
        carousel.scrollLeft += btn.id === "esquerda" ? -primerioCard : primerioCard;
    });
});
/*FIM Carousel */

function showMobileMenu(){
    const MobileMenu = document.querySelector('.mobile-menu');
    MobileMenu.style.display = 'flex'
}

function hideMobileMenu(){
    const MobileMenu = document.querySelector('.mobile-menu');
    MobileMenu.style.display = 'none'
}