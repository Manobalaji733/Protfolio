// Mobile menu toggle functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Close mobile menu if open (for mobile devices)
        if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
        }
    });
});

// Add scroll animation to reveal elements
document.addEventListener('DOMContentLoaded', function() {
    // Add active class to sections when scrolling
    window.addEventListener('scroll', revealOnScroll);
    
    function revealOnScroll() {
        const sections = document.querySelectorAll('section');
        const windowHeight = window.innerHeight;
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < windowHeight - 100) {
                section.classList.add('active');
            }
        });
    }
    
    // Initial check to reveal elements that are already visible
    revealOnScroll();
    
    // Highlight active navigation link based on scroll position
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// Add animation on page load
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});