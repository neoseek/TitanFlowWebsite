// Main JavaScript for TitanFlow website

// Mobile menu toggle (for future enhancements)
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add active class to current page in navigation
    const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('.nav-links');

    function setMenuOpen(isOpen) {
        if (!menuToggle || !navList) return;
        menuToggle.classList.toggle('active', isOpen);
        navList.classList.toggle('open', isOpen);
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    }

    function setActiveLink(targetHash) {
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === targetHash);
        });
    }

    if (window.location.hash) {
        setActiveLink(window.location.hash);
    }

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentLocation || (currentLocation === '' && href === 'index.html')) {
            link.classList.add('active');
        }

        link.addEventListener('click', () => {
            setMenuOpen(false);
            if (href.startsWith('#')) {
                setActiveLink(href);
            }
        });
    });

    if (menuToggle && navList) {
        // ARIA
        menuToggle.setAttribute('aria-expanded', 'false');
        // If an id isn't present, add one so aria-controls can exist.
        if (!navList.id) {
            navList.id = 'primary-navigation';
        }
        menuToggle.setAttribute('aria-controls', navList.id);

        menuToggle.addEventListener('click', function() {
            const isOpen = navList.classList.contains('open');
            setMenuOpen(!isOpen);
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!navList.classList.contains('open')) return;
            const target = e.target;
            if (!(target instanceof Element)) return;
            const clickedInside = navList.contains(target) || menuToggle.contains(target);
            if (!clickedInside) {
                setMenuOpen(false);
            }
        });

        // Close on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                setMenuOpen(false);
            }
        });

        // Reset menu when resizing up to desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth > 900) {
                setMenuOpen(false);
            }
        });
    }

    window.addEventListener('hashchange', () => {
        if (window.location.hash) {
            setActiveLink(window.location.hash);
        }
    });

    // Simple form validation for future contact forms
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add form submission logic here
            console.log('Form submitted');
        });
    });
});

// Add intersection observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards and other elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.feature-card, .plan-card, .feature-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
