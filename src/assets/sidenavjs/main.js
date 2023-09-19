const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
const sideNav = document.querySelector('.side-nav');
const closeBtn = document.querySelector('.close-btn');

// Open the side nav
mobileNavToggleBtn.addEventListener('click', () => {
    sideNav.classList.add('active');
});

// Close the side nav
closeBtn.addEventListener('click', () => {
    sideNav.classList.remove('active');
});

