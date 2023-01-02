/*===== ALLERT MASSAGE =====*/ 
/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.style.top="0%";
    //classList.toggle('active'); 
        })
    }
}
showMenu('nav__toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.style.top="-180%";
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 45;
        sectionId = current.getAttribute('section[id]')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img,',{interval: 200}); 
sr.reveal('.home__img, .about__subtitle',{delay: 400}); 
sr.reveal('.home__social-icons, .home__title',{ interval: 200}); 
sr.reveal('.skills__data, .skills__text, .work__img, .home__button',{interval: 400});
sr.reveal('.about__text, .skills__subtitle',{interval: 200});
sr.reveal('.contact__input, .button',{interval: 200});
sr.reveal('.contact__container',{interval: 200});