const toggleBtn = document.querySelector('.toggle');

const mobileMenu = document.querySelector('.mobile-menu');

toggleBtn.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('show');
    toggleBtn.classList.toggle('rotate');
})
