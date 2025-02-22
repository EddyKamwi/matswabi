// Mobile Navigation Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const bars = document.getElementById('bars');
var clicked = true;

// Utility functions
const toggleMenu = (show) => {
    navLinks.classList.toggle('active', show);
    mobileMenuBtn.classList.toggle('active', show);
    document.body.style.overflow = show ? 'hidden' : 'auto';
};

// Event handlers
const handleClickOutside = (e) => {
    if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        toggleMenu(false);
    }
};

const handleScroll = (callback, delay = 10) => {
    let timeoutId;
    return () => {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(callback, delay);
    };
};

// Consolidated animation functions
const animateElement = (element, animation) => {
    element.style.animation = animation;
    element.addEventListener('animationend', () => {
        element.style.animation = '';
    }, { once: true });
};

// Consolidated event listeners
const addHoverEffect = (element, scale = 1.05) => {
    element.addEventListener('mouseenter', () => {
        element.style.transform = `scale(${scale})`;
    });
    element.addEventListener('mouseleave', () => {
        element.style.transform = 'scale(1)';
    });
};

// Clean up existing code
document.addEventListener('click', handleClickOutside);
window.addEventListener('scroll', handleScroll(() => {
    // Your scroll logic here
}));

// Apply hover effects
document.querySelectorAll('.hover-effect').forEach(element => {
    addHoverEffect(element);
});

// Mobile menu toggle with scroll fix
mobileMenuBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.contains('active');
    navLinks.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active')

    // Don't disable body scroll, just manage menu scroll
    if (isOpen) {
        navLinks.style.overflow = 'hidden';
    } else {
        navLinks.style.overflow = 'auto';
    }
});

// Close mobile menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        navLinks.classList.remove('active');
        mobileMenuBtn.classList.remove('active');

        document.querySelectorAll('.active').forEach(element => {
            element.classList.remove('active');
        })

        e.target.classList.add('active')
    });
});

// Ensure smooth scroll doesn't get blocked
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Remove any scroll blocking
            document.body.style.overflow = 'auto';

            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll Animation for Fade-In Elements
const fadeElements = document.querySelectorAll('.fade-in');
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

fadeElements.forEach(element => {
    observer.observe(element);
});

// Form Validation and Submission
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Basic form validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !phone || !message) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }

    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }

    if (!isValidPhone(phone)) {
        showNotification('Please enter a valid phone number', 'error');
        return;
    }

    // Simulate form submission
    showNotification('Thank you for your message. We will contact you soon!', 'success');
    contactForm.reset();
});

// Utility Functions
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
    return /^[\d\s+()-]{10,}$/.test(phone);
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Sticky Navigation
const nav = document.querySelector('.main-nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        nav.classList.remove('scroll-up');
        return;
    }

    if (currentScroll > lastScroll && !nav.classList.contains('scroll-down')) {
        // Scrolling down
        nav.classList.remove('scroll-up');
        nav.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && nav.classList.contains('scroll-down')) {
        // Scrolling up
        nav.classList.remove('scroll-down');
        nav.classList.add('scroll-up');
    }

    lastScroll = currentScroll;
});

// Package Selection Enhancement
const packageCards = document.querySelectorAll('.package-card');
const packageSelect = document.getElementById('package');

packageCards.forEach(card => {
    card.addEventListener('click', () => {
        const packageType = card.classList[1]; // Get package type from class
        packageSelect.value = packageType;

        // Smooth scroll to contact form
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Enhanced Navigation
const navigationLinks = document.querySelectorAll('.nav-link');

navigationLinks.forEach(link => {
    link.addEventListener('mouseenter', (e) => {
        const { left, width } = e.target.getBoundingClientRect();
        const hover = e.target.querySelector('::after');
        if (hover) {
            hover.style.left = `${left}px`;
            hover.style.width = `${width}px`;
        }
    });
});

// Service Button Animations
const serviceButtons = document.querySelectorAll('.service-btn');

serviceButtons.forEach((btn, index) => {
    btn.style.setProperty('--i', index);

    // Add hover effect
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'scale(1.05)';
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'scale(1)';
    });

    // Add click effect
    btn.addEventListener('click', () => {
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 150);
    });
});

// Package card animations
const packageCardElements = document.querySelectorAll('.package-card');
packageCardElements.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Statistics Counter Animation
const stats = document.querySelectorAll('.stat-number');

const animateStats = () => {
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                stat.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target;
            }
        };

        updateCounter();
    });
};

// Trigger animation when stats section is in view
const statsSection = document.querySelector('.stats-section');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (statsSection) {
    statsObserver.observe(statsSection);
}

// Services Dropdown Toggle
const servicesDropdown = document.querySelector('.services-dropdown');
const dropdownToggle = servicesDropdown.querySelector('.nav-link');

dropdownToggle.addEventListener('click', (e) => {
    if (window.innerWidth <= 767) {
        e.preventDefault();
        servicesDropdown.classList.toggle('active');
    }
}); 