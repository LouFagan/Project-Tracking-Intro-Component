const hamburger = document.querySelector('.menuMobile__close');
const x = document.querySelector('.menuMobile__open');
const mobileLinks = document.querySelector('.mobile-links');

hamburger.addEventListener('click', () => {
    mobileLinks.classList.toggle('hidden');
    hamburger.classList.toggle('hidden');
    x.classList.toggle('hidden');
});
x.addEventListener('click', () => {
    mobileLinks.classList.toggle('hidden');
    hamburger.classList.toggle('hidden');
    x.classList.toggle('hidden');
});




/* function activeFunction(e, ev) {
    for (var i = 0; i < e.children.length; i++) {
        e.children[i].childNodes[0].className = "";
    }
    ev.target.className = "current-link";
} */