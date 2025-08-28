function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
// Mobile menu functionality
function toggleMobileMenu() {
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.overlay');
    const burgerMenu = document.querySelector('.burger-menu');
    
    mobileNav.classList.toggle('active');
    overlay.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    
    // Prevent body scrolling when menu is open
    if (mobileNav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

function closeMobileMenu() {
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.overlay');
    const burgerMenu = document.querySelector('.burger-menu');
    
    mobileNav.classList.remove('active');
    overlay.classList.remove('active');
    burgerMenu.classList.remove('active');
    document.body.style.overflow = '';
}

// Enhanced scroll function (keeping your existing scrollToSection but improving it)
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const headerHeight = document.querySelector('.header').offsetHeight;
    const targetPosition = section.offsetTop - headerHeight;
    
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
    
    // Close mobile menu if open
    closeMobileMenu();
}

// Close mobile menu when pressing Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeMobileMenu();
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    const mobileNav = document.querySelector('.mobile-nav');
    const burgerMenu = document.querySelector('.burger-menu');
    
    if (mobileNav.classList.contains('active') && 
        !mobileNav.contains(e.target) && 
        !burgerMenu.contains(e.target)) {
        closeMobileMenu();
    }
});
