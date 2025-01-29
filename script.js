document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // ScrollReveal initialization
    ScrollReveal().reveal('.project-card, .skill-card', {
        delay: 200,
        distance: '50px',
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        origin: 'bottom',
        interval: 100
    });

    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        // For this example, we'll just log it to the console
        const formData = new FormData(contactForm);
        console.log('Form submitted with data:', Object.fromEntries(formData));
        alert('Thank you for your message! I\'ll get back to you soon.');
        contactForm.reset();
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const hero = document.querySelector('.hero');
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    });

    // Typing effect for hero text
    const heroText = "Web Developer & Designer";
    const heroP = document.querySelector('.hero p');
    let i = 0;
    const typeWriter = () => {
        if (i < heroText.length) {
            heroP.innerHTML += heroText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    typeWriter();
});