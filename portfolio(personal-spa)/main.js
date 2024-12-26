let isScrolling = true;
window.addEventListener('scroll',function(){
    let header = document.querySelector('header');
    let logo = header.querySelector('.logo');
    header.classList.toggle('sticky',window.scrollY );
    logo.style.color = "white";

    if(header.className === 'sticky'){
        logo.style.color = "black"

    }
    

});
       
function toggleMenu() {
    let menuToggle = document.querySelector('.toggle');
    let menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');

}

