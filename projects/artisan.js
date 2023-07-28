// Smooth scrolling for anchor links
const smoothScroll = (target) => {
    const element = document.querySelector(target);
    const headerHeight = document.querySelector('header').offsetHeight;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerHeight;

    window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        smoothScroll(this.getAttribute('href'));
    });
});

// Fade-in animation for sections
const fadeInSections = () => {
    const sections = document.querySelectorAll('.section');

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    };

    const animateSections = () => {
        sections.forEach(section => {
            if (isInViewport(section)) {
                section.style.opacity = 1;
                section.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial animation on page load
    animateSections();

    // Animate sections on scroll
    window.addEventListener('scroll', animateSections);
};

fadeInSections();

// Hover effect for CTA buttons
const ctaButtons = document.querySelectorAll('.cta-btn');

ctaButtons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#e74c3c';
    });

    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#ff6b6b';
    });
});
