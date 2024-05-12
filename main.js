let mixerprojects= mixitup('.projects--container', {
    selectors: {
        target: '.project--item',
    },
    animation: {
        duration: 300,
    },
});

const linkWork=document.querySelectorAll(.category--btn);
function activeWork(){
    linkWork.forEach((a)=>a.classList.remove('active-work'));
    this.classList.add('activework');
}
let testiSwiper = new Swiper('.testimonial--container',{
    loop:true,
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
    pagination:{
        el:'.swiper-pagination',
    },
    mousewheel:true,
    keyboard:true,
 });
 