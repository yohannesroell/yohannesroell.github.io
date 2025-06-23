document.addEventListener('DOMContentLoaded', function() {
    // Load portfolio images
    loadPortfolio();
    
    // Create modal for image zoom
    createImageModal();
    
    function loadPortfolio() {
        const portfolioContainer = document.getElementById('portfolio-content');
        
        // List of portfolio images from data/portfolio
        const portfolioImages = [
            'data/portfolio/469716341_368837722959466_8699566531465594085_n.jpg',
            'data/portfolio/469853763_2505498656508034_7976533846944875859_n.jpg',
            'data/portfolio/470074891_985808190052937_7265116713920602334_n.jpg',
            'data/portfolio/instagram_image_2025-06-22T19-51-31.jpg'
        ];
        
        portfolioImages.forEach(imagePath => {
            const portfolioItem = document.createElement('div');
            portfolioItem.className = 'portfolio-item';
            
            const img = document.createElement('img');
            img.src = imagePath;
            img.alt = 'Portfolio Work';
            img.className = 'portfolio-image';
            
            // Add click handler for zoom modal
            img.addEventListener('click', () => openImageModal(imagePath));
            
            portfolioItem.appendChild(img);
            portfolioContainer.appendChild(portfolioItem);
        });
    }
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact form handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Simple validation
            if (!data.name || !data.email || !data.message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Simulate form submission (replace with actual form handler)
            const submitButton = this.querySelector('.submit-button');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                alert('Thank you for your message! I\'ll get back to you soon.');
                this.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 1500);
        });
    }

    // Portfolio item hover effects
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    // Add loading animation for images
    const placeholderImages = document.querySelectorAll('.placeholder-image');
    placeholderImages.forEach(placeholder => {
        placeholder.addEventListener('click', function() {
            if (this.textContent.includes('Image') || this.textContent.includes('Photo')) {
                this.innerHTML = '<div style="animation: pulse 2s infinite;">Click to upload image</div>';
            }
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

    // Apply fade-in animation to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Skills animation on scroll
    const skills = document.querySelectorAll('.skill');
    const skillsObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.transform = 'scale(1)';
                    entry.target.style.opacity = '1';
                }, index * 100);
            }
        });
    }, observerOptions);

    skills.forEach(skill => {
        skill.style.transform = 'scale(0.8)';
        skill.style.opacity = '0';
        skill.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
        skillsObserver.observe(skill);
    });

    // Image modal functions
    function createImageModal() {
        const modal = document.createElement('div');
        modal.id = 'image-modal';
        modal.className = 'image-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="modal-close">&times;</span>
                <img class="modal-image" src="" alt="Portfolio Image">
            </div>
        `;
        document.body.appendChild(modal);

        // Close modal when clicking X or outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.className === 'modal-close') {
                closeImageModal();
            }
        });

        // Close modal with escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeImageModal();
            }
        });
    }

    function openImageModal(imagePath) {
        const modal = document.getElementById('image-modal');
        const modalImage = modal.querySelector('.modal-image');
        modalImage.src = imagePath;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function closeImageModal() {
        const modal = document.getElementById('image-modal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Make functions global so they can be called from image click handlers
    window.openImageModal = openImageModal;
    window.closeImageModal = closeImageModal;
});

// Add CSS animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { opacity: 1; }
        50% { opacity: 0.5; }
        100% { opacity: 1; }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);