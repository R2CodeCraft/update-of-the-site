// ==========================================
// CIVIL MASTER - HASH ROUTER
// ==========================================
// Simple hash-based router for GitHub Pages compatibility

class Router {
    constructor() {
        this.routes = {};
        this.currentRoute = null;
        this.pageContainer = document.getElementById('page-content');
        
        // Listen for hash changes
        window.addEventListener('hashchange', () => this.handleRouteChange());
        
        // Handle initial load
        window.addEventListener('load', () => this.handleRouteChange());
    }
    
    register(route, handler) {
        this.routes[route] = handler;
    }
    
    handleRouteChange() {
        const hash = window.location.hash.slice(1) || 'home';
        const route = hash.split('/')[0];
        
        if (this.routes[route]) {
            this.navigate(route, false);
        } else {
            this.navigate('home', false);
        }
    }
    
    navigate(route, pushState = true) {
        if (!this.routes[route]) {
            console.error(`Route '${route}' not found`);
            this.navigate('home', false);
            return;
        }
        
        if (pushState) {
            window.location.hash = route;
        }
        
        this.currentRoute = route;
        this.updateActiveNav(route);
        this.transitionTo(route);
    }
    
    updateActiveNav(route) {
        // Remove active class from all nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        
        // Add active class to current route link
        const activeLink = document.querySelector(`.nav-link[href="#${route}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
    
    transitionTo(route) {
        if (!this.pageContainer) {
            console.error('Page container not found');
            return;
        }

        // Scroll to top immediately
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        // Remove loaded class to reset animation
        this.pageContainer.classList.remove('loaded');
        
        // Fade out
        this.pageContainer.style.opacity = '0';
        this.pageContainer.style.transform = 'translateY(10px)';
        this.pageContainer.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        
        setTimeout(() => {
            // Load new content
            const content = this.routes[route]();
            this.pageContainer.innerHTML = content;
            window.scrollTo(0, 0);
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            
            // Reinitialize Bootstrap components
            this.reinitializeBootstrap();
            
            // Reinitialize page-specific scripts
            this.initPageScripts(route);
            
            // Add page transition class
            this.pageContainer.classList.add('page-transition');
            
            // Fade in
            requestAnimationFrame(() => {
                this.pageContainer.style.opacity = '1';
                this.pageContainer.style.transform = 'translateY(0)';
                
                // Trigger page load animation after fade in
                setTimeout(() => {
                    this.pageContainer.classList.add('loaded');
                    this.pageContainer.classList.remove('page-transition');
                    
                    // Reinitialize scroll reveal for new content
                    if (typeof initScrollReveal === 'function') {
                        initScrollReveal();
                    }
                }, 100);
            });
        }, 300);
    }
    
    reinitializeBootstrap() {
        // Reinitialize Bootstrap modals, tooltips, etc.
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            const bsModal = bootstrap.Modal.getInstance(modal);
            if (bsModal) {
                bsModal.dispose();
            }
        });
        
        // Reinitialize carousels
        const carousels = document.querySelectorAll('.carousel');
        carousels.forEach(carousel => {
            const bsCarousel = bootstrap.Carousel.getInstance(carousel);
            if (bsCarousel) {
                bsCarousel.dispose();
            }
            new bootstrap.Carousel(carousel);
        });
    }
    
    initPageScripts(route) {
        // Reinitialize page-specific functionality
        if (typeof initSubjects === 'function') {
            initSubjects();
        }
        if (typeof initVideos === 'function') {
            initVideos();
        }
        if (typeof initAIChat === 'function') {
            initAIChat();
        }
        if (typeof initSearch === 'function') {
            initSearch();
        }
        if (typeof initTooltips === 'function') {
            initTooltips();
        }
        if (typeof reinitializeThemeToggle === 'function') {
            reinitializeThemeToggle();
        }
    }
}

// ==========================================
// PAGE CONTENT FUNCTIONS
// ==========================================

// HOME PAGE
function homePage() {
    return `
    <!-- Hero Section -->
    <section class="hero-section">
        <div class="container">
            <div class="row align-items-center min-vh-100">
                <div class="col-lg-6 hero-content">
                    <h1 class="hero-title">Turn Civil Engineering From Difficult to Mastered.</h1>
                    <p class="hero-subtitle">Learn the concepts. Practice the problems. Prepare for your exams. Civil Master brings the resources, guidance and tools you need to become a more confident civil engineering student — all in one place.</p>
                    <div class="hero-cta">
                        <a href="#explore" class="btn btn-primary btn-lg me-3">
                            Explore Civil Master <i class="bi bi-arrow-right ms-2"></i>
                        </a>
                        <a href="#resources" class="btn btn-outline-light btn-lg">
                            Start Learning <i class="bi bi-book ms-2"></i>
                        </a>
                    </div>
                </div>
                <div class="col-lg-6 hero-visual">
                    <div class="phone-mockup">
                        <img src="uy-logo.png.jpg" alt="Civil Master App" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Key Benefits Section -->
    <section class="key-benefits-section py-5 reveal-section">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="section-title">Everything You Need to Learn Civil Engineering Smarter</h2>
                <p class="section-subtitle">Comprehensive tools designed for civil engineering students</p>
            </div>
            <div class="row g-4">
                <div class="col-lg-4 col-md-6">
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="bi bi-file-earmark-text"></i>
                        </div>
                        <h5>Past Questions</h5>
                        <p>Access and practice past examination questions organized by subject and year.</p>
                        <a href="#resources" class="btn btn-outline-primary btn-sm">
                            Explore <i class="bi bi-arrow-right ms-1"></i>
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="bi bi-book"></i>
                        </div>
                        <h5>Notes</h5>
                        <p>Organized academic notes for civil engineering subjects.</p>
                        <a href="#resources" class="btn btn-outline-primary btn-sm">
                            View Notes <i class="bi bi-arrow-right ms-1"></i>
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="bi bi-pencil-square"></i>
                        </div>
                        <h5>Practice Questions</h5>
                        <p>Interactive practice area with instant feedback and progress tracking.</p>
                        <a href="#resources" class="btn btn-outline-primary btn-sm">
                            Start Practice <i class="bi bi-arrow-right ms-1"></i>
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="bi bi-lightbulb"></i>
                        </div>
                        <h5>Tutorials</h5>
                        <p>Step-by-step tutorials for difficult civil engineering concepts.</p>
                        <a href="#tutorials" class="btn btn-outline-primary btn-sm">
                            Learn <i class="bi bi-arrow-right ms-1"></i>
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="bi bi-play-circle"></i>
                        </div>
                        <h5>Tutorial Videos</h5>
                        <p>Video-based learning with searchable content.</p>
                        <a href="#tutorials" class="btn btn-outline-primary btn-sm">
                            Watch <i class="bi bi-arrow-right ms-1"></i>
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="bi bi-robot"></i>
                        </div>
                        <h5>AI Assistant</h5>
                        <p>Get instant help with your studies anytime.</p>
                        <a href="#ai" class="btn btn-outline-primary btn-sm">
                            Ask AI <i class="bi bi-arrow-right ms-1"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Subjects Preview Section -->
    <section class="subjects-preview-section py-5 reveal-section">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="section-title">Explore Subjects</h2>
                <p class="section-subtitle">Browse civil engineering subjects</p>
            </div>
            <div class="row g-4" id="subjectsGrid">
                <!-- Subjects will be loaded dynamically -->
            </div>
            <div class="text-center mt-4">
                <a href="#subjects" class="btn btn-primary">
                    Explore All Subjects <i class="bi bi-arrow-right ms-2"></i>
                </a>
            </div>
        </div>
    </section>
    
    <!-- Final CTA Section -->
    <section class="cta-section py-5 reveal-section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 text-center">
                    <h2 class="section-title">Your Next Civil Engineering Breakthrough Starts Here.</h2>
                    <p class="section-subtitle mb-4">Study smarter. Practice consistently. Understand difficult concepts. Build the confidence to take on your next examination.</p>
                    <div class="cta-buttons">
                        <a href="#explore" class="btn btn-primary btn-lg me-3">
                            Explore Civil Master <i class="bi bi-arrow-right ms-2"></i>
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=app.rene.civil_master" class="btn btn-outline-light btn-lg" target="_blank" rel="noopener noreferrer">
                            <i class="bi bi-google-play me-2"></i>Download App
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
}

// ABOUT PAGE
function aboutPage() {
    return `
    <section class="about-hero-section py-5 reveal-section">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 about-content">
                    <h1 class="section-title">Built for Students Who Want to Master Civil Engineering — Not Just Survive It.</h1>
                    <p class="section-subtitle mb-4">Civil Master is an innovative educational platform designed specifically for civil engineering students in Cameroon and beyond.</p>
                    
                    <div class="about-content">
                        <p>Civil Master provides comprehensive learning resources including past examination questions, detailed notes, step-by-step tutorials, video lessons, interactive practice questions, and an AI-powered learning assistant.</p>
                        
                        <p>Our mission is to make civil engineering education accessible, engaging, and effective by providing students with all the tools they need to succeed in their academic journey.</p>
                        
                        <p>Whether you're preparing for exams, trying to understand complex concepts, or looking for practice materials, Civil Master is your go-to companion for civil engineering studies.</p>
                    </div>
                </div>
                
                <div class="col-lg-6 about-visual">
                    <div class="about-illustration">
                        <i class="bi bi-mortarboard"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Why Civil Master Section -->
    <section class="why-section py-5 reveal-section">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="section-title">Why Civil Master?</h2>
                <p class="section-subtitle">The advantages of learning with Civil Master</p>
            </div>
            
            <div class="row g-4">
                <div class="col-lg-4 col-md-6">
                    <div class="why-card">
                        <i class="bi bi-check-circle-fill text-success"></i>
                        <p>Built specifically for civil engineering students</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="why-card">
                        <i class="bi bi-check-circle-fill text-success"></i>
                        <p>All learning resources in one place</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="why-card">
                        <i class="bi bi-check-circle-fill text-success"></i>
                        <p>Easy access to past examination questions</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="why-card">
                        <i class="bi bi-check-circle-fill text-success"></i>
                        <p>Video-based learning for visual learners</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="why-card">
                        <i class="bi bi-check-circle-fill text-success"></i>
                        <p>Organized and comprehensive notes</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="why-card">
                        <i class="bi bi-check-circle-fill text-success"></i>
                        <p>Interactive practice with instant feedback</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="why-card">
                        <i class="bi bi-check-circle-fill text-success"></i>
                        <p>AI-powered learning assistance</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="why-card">
                        <i class="bi bi-check-circle-fill text-success"></i>
                        <p>Mobile-friendly learning anywhere</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="why-card">
                        <i class="bi bi-check-circle-fill text-success"></i>
                        <p>Designed to improve academic performance</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- FAQ Section -->
    <section class="faq-section py-5 reveal-section">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="section-title">Frequently Asked Questions</h2>
                <p class="section-subtitle">Find answers to common questions</p>
            </div>
            
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="accordion" id="faqAccordion">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                                    What is Civil Master?
                                </button>
                            </h2>
                            <div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                <div class="accordion-body">
                                    Civil Master is an educational platform designed specifically for civil engineering students. It provides access to past questions, notes, tutorials, videos, practice resources, and AI-powered learning assistance in one mobile application.
                                </div>
                            </div>
                        </div>
                        
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                                    Who is Civil Master designed for?
                                </button>
                            </h2>
                            <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                <div class="accordion-body">
                                    Civil Master is designed for civil engineering students at all levels, from beginners to advanced learners. It's particularly useful for university students preparing for examinations.
                                </div>
                            </div>
                        </div>
                        
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                                    What resources are available?
                                </button>
                            </h2>
                            <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                <div class="accordion-body">
                                    Civil Master includes past examination questions, organized notes, step-by-step tutorials, video lessons, interactive practice questions, and an AI-powered learning assistant.
                                </div>
                            </div>
                        </div>
                        
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                                    Does Civil Master contain past questions?
                                </button>
                            </h2>
                            <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                <div class="accordion-body">
                                    Yes, Civil Master provides access to past examination questions organized by subject and year, allowing students to practice and prepare effectively.
                                </div>
                            </div>
                        </div>
                        
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
                                    Does Civil Master have AI?
                                </button>
                            </h2>
                            <div id="faq5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                <div class="accordion-body">
                                    Yes, Civil Master includes an AI-powered learning assistant that can help answer questions, explain concepts, and provide learning support.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
}

// EXPLORE PAGE
function explorePage() {
    return `
    <section class="explore-hero-section py-5 reveal-section">
        <div class="container">
            <div class="text-center">
                <h1 class="section-title">Explore Civil Master</h1>
                <p class="section-subtitle">Everything you need to learn, practice, revise and strengthen your civil engineering knowledge — all in one place.</p>
            </div>
        </div>
    </section>
    
    <!-- App Screenshot Showcase -->
    <section class="app-showcase-section py-5 reveal-section">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="section-title">Take a Look at What's Inside the App</h2>
                <p class="section-subtitle">Explore Civil Master features</p>
            </div>
            
            <div id="screenshotCarousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="screenshot-card text-center">
                            <img src="sis-logo.png.jpeg" alt="Community Support" class="screenshot-img">
                            <h5>Community Support</h5>
                            <p>Connect, Learn, and Grow Together!</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="screenshot-card text-center">
                            <img src="grs-logo.png.jpg" alt="Empowering Users" class="screenshot-img">
                            <h5>Empowering Users</h5>
                            <p>Unlock your full potential</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="screenshot-card text-center">
                            <img src="nn-logo.png.jpg" alt="General Introduction" class="screenshot-img">
                            <h5>General Introduction</h5>
                            <p>Get started with Civil Master</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="screenshot-card text-center">
                            <img src="dee-logo.png.jpg" alt="Login" class="screenshot-img">
                            <h5>Login</h5>
                            <p>Access your account</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="screenshot-card text-center">
                            <img src="zan-logo.png.jpg" alt="Profile" class="screenshot-img">
                            <h5>Profile</h5>
                            <p>Manage your account</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#screenshotCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#screenshotCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </section>
    
    <!-- Explore Actions Section -->
    <section class="explore-actions-section py-5 reveal-section">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="section-title">What Can You Do?</h2>
                <p class="section-subtitle">Organized features for your learning journey</p>
            </div>
            
            <div class="row g-4">
                <div class="col-lg-4">
                    <div class="explore-action-card">
                        <h4 class="text-primary">Learn</h4>
                        <hr>
                        <div class="mb-3">
                            <h5>Notes</h5>
                            <p class="text-muted">Comprehensive study materials</p>
                            <a href="#resources" class="btn btn-outline-primary btn-sm">Browse Notes</a>
                        </div>
                        <div class="mb-3">
                            <h5>Tutorials</h5>
                            <p class="text-muted">Step-by-step guides</p>
                            <a href="#resources" class="btn btn-outline-primary btn-sm">Learn</a>
                        </div>
                        <div>
                            <h5>Tutorial Videos</h5>
                            <p class="text-muted">Visual learning content</p>
                            <a href="#tutorials" class="btn btn-outline-primary btn-sm">Watch</a>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4">
                    <div class="explore-action-card">
                        <h4 class="text-primary">Practice</h4>
                        <hr>
                        <div class="mb-3">
                            <h5>Past Questions</h5>
                            <p class="text-muted">Real examination questions</p>
                            <a href="#resources" class="btn btn-outline-primary btn-sm">Explore Past Questions</a>
                        </div>
                        <div>
                            <h5>Practice Questions</h5>
                            <p class="text-muted">Interactive practice tests</p>
                            <a href="#resources" class="btn btn-outline-primary btn-sm">Start Practice</a>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4">
                    <div class="explore-action-card">
                        <h4 class="text-primary">Get Help</h4>
                        <hr>
                        <div>
                            <h5>AI Assistant</h5>
                            <p class="text-muted">24/7 learning support</p>
                            <a href="#ai" class="btn btn-outline-primary btn-sm">Ask AI</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- How It Works Section -->
    <section class="how-it-works-section py-5 reveal-section">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="section-title">How Civil Master Works</h2>
                <p class="section-subtitle">Get started in 4 simple steps</p>
            </div>
            
            <div class="row">
                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="step-card text-center">
                        <div class="step-number">1</div>
                        <div class="step-icon">
                            <i class="bi bi-download"></i>
                        </div>
                        <h5>Download</h5>
                        <p>Download Civil Master from Google Play Store</p>
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="step-card text-center">
                        <div class="step-number">2</div>
                        <div class="step-icon">
                            <i class="bi bi-search"></i>
                        </div>
                        <h5>Explore</h5>
                        <p>Browse notes, past questions, tutorials and videos</p>
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="step-card text-center">
                        <div class="step-number">3</div>
                        <div class="step-icon">
                            <i class="bi bi-check-circle"></i>
                        </div>
                        <h5>Practice</h5>
                        <p>Test your knowledge with practice questions</p>
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="step-card text-center">
                        <div class="step-number">4</div>
                        <div class="step-icon">
                            <i class="bi bi-robot"></i>
                        </div>
                        <h5>Learn With AI</h5>
                        <p>Use the built-in AI assistant whenever you need help</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
}

// RESOURCES PAGE
function resourcesPage() {
    return `
    <section class="resources-hero-section py-5 reveal-section">
        <div class="container">
            <div class="text-center">
                <h1 class="section-title">Learning Resources</h1>
                <p class="section-subtitle">Access comprehensive learning materials organized for effective study</p>
            </div>
        </div>
    </section>
    
    <!-- Features Section -->
    <section class="features-section py-5 reveal-section">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="section-title">Available Resources</h2>
                <p class="section-subtitle">Comprehensive tools designed for civil engineering students</p>
            </div>
            
            <div class="row g-4">
                <!-- Past Questions -->
                <div class="col-lg-4 col-md-6">
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="bi bi-file-earmark-text"></i>
                        </div>
                        <h5>Past Questions</h5>
                        <p>Access and practice past examination questions organized by subject and year. Filter by category and test your knowledge.</p>
                        <button class="btn btn-outline-primary btn-sm" data-bs-toggle="modal" data-bs-target="#pastQuestionsModal">
                            Explore <i class="bi bi-arrow-right ms-1"></i>
                        </button>
                    </div>
                </div>
                
                <!-- Notes -->
                <div class="col-lg-4 col-md-6">
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="bi bi-book"></i>
                        </div>
                        <h5>Notes</h5>
                        <p>Organized academic notes for civil engineering subjects. Browse by topic and access comprehensive study materials.</p>
                        <button class="btn btn-outline-primary btn-sm" data-bs-toggle="modal" data-bs-target="#notesModal">
                            Explore <i class="bi bi-arrow-right ms-1"></i>
                        </button>
                    </div>
                </div>
                
                <!-- Tutorials -->
                <div class="col-lg-4 col-md-6">
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="bi bi-lightbulb"></i>
                        </div>
                        <h5>Tutorials</h5>
                        <p>Step-by-step tutorials designed to make difficult civil engineering concepts easier to understand.</p>
                        <button class="btn btn-outline-primary btn-sm" data-bs-toggle="modal" data-bs-target="#tutorialsModal">
                            Explore <i class="bi bi-arrow-right ms-1"></i>
                        </button>
                    </div>
                </div>
                
                <!-- Tutorial Videos -->
                <div class="col-lg-4 col-md-6">
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="bi bi-play-circle"></i>
                        </div>
                        <h5>Tutorial Videos</h5>
                        <p>Video-based learning with searchable content. Filter by topic and watch tutorials at your own pace.</p>
                        <a href="#tutorials" class="btn btn-outline-primary btn-sm">
                            Explore <i class="bi bi-arrow-right ms-1"></i>
                        </a>
                    </div>
                </div>
                
                <!-- Practice -->
                <div class="col-lg-4 col-md-6">
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="bi bi-pencil-square"></i>
                        </div>
                        <h5>Practice Questions</h5>
                        <p>Interactive practice area with multiple-choice questions, instant feedback, and progress tracking.</p>
                        <button class="btn btn-outline-primary btn-sm" data-bs-toggle="modal" data-bs-target="#practiceModal">
                            Try Now <i class="bi bi-arrow-right ms-1"></i>
                        </button>
                    </div>
                </div>
                
                <!-- AI Assistant -->
                <div class="col-lg-4 col-md-6">
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="bi bi-robot"></i>
                        </div>
                        <h5>AI Assistant</h5>
                        <p>Get instant help with your studies. Ask questions and receive AI-powered learning assistance anytime.</p>
                        <a href="#ai" class="btn btn-outline-primary btn-sm">
                            Try AI <i class="bi bi-arrow-right ms-1"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
}

// SUBJECTS PAGE
function subjectsPage() {
    return `
    <section class="subjects-hero-section py-5 reveal-section">
        <div class="container">
            <div class="text-center">
                <h1 class="section-title">Civil Engineering Subjects</h1>
                <p class="section-subtitle">Browse our comprehensive learning directory organized by subject</p>
            </div>
        </div>
    </section>
    
    <section class="subjects-section py-5 reveal-section">
        <div class="container">
            <div class="row g-4" id="subjectsGrid">
                <div class="col-lg-3 col-md-6">
                    <div class="subject-card" data-bs-toggle="modal" data-bs-target="#structuralModal">
                        <div class="subject-icon">
                            <i class="bi bi-building"></i>
                        </div>
                        <h5>Structural Engineering</h5>
                        <p>Analysis and design of structures</p>
                        <span class="resource-count">45 Resources</span>
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-6">
                    <div class="subject-card" data-bs-toggle="modal" data-bs-target="#fluidModal">
                        <div class="subject-icon">
                            <i class="bi bi-water"></i>
                        </div>
                        <h5>Fluid Mechanics</h5>
                        <p>Study of fluids in motion and at rest</p>
                        <span class="resource-count">38 Resources</span>
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-6">
                    <div class="subject-card" data-bs-toggle="modal" data-bs-target="#soilModal">
                        <div class="subject-icon">
                            <i class="bi bi-layers"></i>
                        </div>
                        <h5>Soil Mechanics</h5>
                        <p>Behavior of soil under various conditions</p>
                        <span class="resource-count">52 Resources</span>
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-6">
                    <div class="subject-card" data-bs-toggle="modal" data-bs-target="#surveyingModal">
                        <div class="subject-icon">
                            <i class="bi bi-rulers"></i>
                        </div>
                        <h5>Surveying</h5>
                        <p>Measurement and mapping of land</p>
                        <span class="resource-count">41 Resources</span>
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-6">
                    <div class="subject-card" data-bs-toggle="modal" data-bs-target="#materialsModal">
                        <div class="subject-icon">
                            <i class="bi bi-hammer"></i>
                        </div>
                        <h5>Construction Materials</h5>
                        <p>Properties and applications of materials</p>
                        <span class="resource-count">36 Resources</span>
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-6">
                    <div class="subject-card" data-bs-toggle="modal" data-bs-target="#transportModal">
                        <div class="subject-icon">
                            <i class="bi bi-diagram-3"></i>
                        </div>
                        <h5>Transportation Engineering</h5>
                        <p>Design of transportation systems</p>
                        <span class="resource-count">33 Resources</span>
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-6">
                    <div class="subject-card" data-bs-toggle="modal" data-bs-target="#environmentalModal">
                        <div class="subject-icon">
                            <i class="bi bi-droplet"></i>
                        </div>
                        <h5>Environmental Engineering</h5>
                        <p>Water and wastewater treatment</p>
                        <span class="resource-count">29 Resources</span>
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-6">
                    <div class="subject-card" data-bs-toggle="modal" data-bs-target="#mathModal">
                        <div class="subject-icon">
                            <i class="bi bi-calculator"></i>
                        </div>
                        <h5>Engineering Mathematics</h5>
                        <p>Mathematical methods for engineering</p>
                        <span class="resource-count">47 Resources</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
}

// TUTORIALS PAGE
function tutorialsPage() {
    return `
    <section class="tutorials-hero-section py-5 reveal-section">
        <div class="container">
            <div class="text-center">
                <h1 class="section-title">Tutorial Videos</h1>
                <p class="section-subtitle">Learn through visual tutorials from our YouTube channel</p>
            </div>
        </div>
    </section>
    
    <section class="videos-section py-5 reveal-section">
        <div class="container">
            <div class="row g-4">
                <div class="col-lg-4 col-md-6">
                    <div class="video-card">
                        <div class="video-thumbnail">
                            <iframe 
                                src="https://www.youtube.com/embed/qhEton-EEOw" 
                                title="Structural Analysis Basics" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                            </iframe>
                        </div>
                        <div class="video-info">
                            <h5>Structural Analysis Basics</h5>
                            <p>Introduction to structural engineering principles</p>
                            <a href="https://www.youtube.com/watch?v=qhEton-EEOw" target="_blank" rel="noopener noreferrer" class="btn btn-outline-primary btn-sm">
                                <i class="bi bi-youtube me-1"></i>Watch on YouTube
                            </a>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-6">
                    <div class="video-card">
                        <div class="video-thumbnail">
                            <iframe 
                                src="https://www.youtube.com/embed/clVwKynHpB0" 
                                title="Fluid Mechanics Fundamentals" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                            </iframe>
                        </div>
                        <div class="video-info">
                            <h5>Fluid Mechanics Fundamentals</h5>
                            <p>Understanding fluid dynamics and pressure</p>
                            <a href="https://www.youtube.com/watch?v=clVwKynHpB0" target="_blank" rel="noopener noreferrer" class="btn btn-outline-primary btn-sm">
                                <i class="bi bi-youtube me-1"></i>Watch on YouTube
                            </a>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-6">
                    <div class="video-card">
                        <div class="video-thumbnail">
                            <iframe 
                                src="https://www.youtube.com/embed/OIHCy5kGy8w" 
                                title="Soil Mechanics Explained" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                            </iframe>
                        </div>
                        <div class="video-info">
                            <h5>Soil Mechanics Explained</h5>
                            <p>Comprehensive guide to soil properties</p>
                            <a href="https://www.youtube.com/watch?v=OIHCy5kGy8w" target="_blank" rel="noopener noreferrer" class="btn btn-outline-primary btn-sm">
                                <i class="bi bi-youtube me-1"></i>Watch on YouTube
                            </a>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-6">
                    <div class="video-card">
                        <div class="video-thumbnail">
                            <iframe 
                                src="https://www.youtube.com/embed/sGnQxMf1p5E" 
                                title="Surveying Techniques" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                            </iframe>
                        </div>
                        <div class="video-info">
                            <h5>Surveying Techniques</h5>
                            <p>Modern surveying methods and tools</p>
                            <a href="https://www.youtube.com/watch?v=sGnQxMf1p5E" target="_blank" rel="noopener noreferrer" class="btn btn-outline-primary btn-sm">
                                <i class="bi bi-youtube me-1"></i>Watch on YouTube
                            </a>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-6">
                    <div class="video-card">
                        <div class="video-thumbnail">
                            <iframe 
                                src="https://www.youtube.com/embed/YCHtRVDdDhM" 
                                title="Construction Materials Guide" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                            </iframe>
                        </div>
                        <div class="video-info">
                            <h5>Construction Materials Guide</h5>
                            <p>Properties and testing of construction materials</p>
                            <a href="https://www.youtube.com/watch?v=YCHtRVDdDhM" target="_blank" rel="noopener noreferrer" class="btn btn-outline-primary btn-sm">
                                <i class="bi bi-youtube me-1"></i>Watch on YouTube
                            </a>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-6">
                    <div class="video-card">
                        <div class="video-thumbnail">
                            <iframe 
                                src="https://www.youtube.com/embed/dimRqr1nwJ8" 
                                title="Transportation Engineering" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                            </iframe>
                        </div>
                        <div class="video-info">
                            <h5>Transportation Engineering</h5>
                            <p>Design and planning of transportation systems</p>
                            <a href="https://www.youtube.com/watch?v=dimRqr1nwJ8" target="_blank" rel="noopener noreferrer" class="btn btn-outline-primary btn-sm">
                                <i class="bi bi-youtube me-1"></i>Watch on YouTube
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="text-center mt-5">
                <a href="https://youtube.com/@civilmaster-r2i?si=1mjBWdFVcarhud97" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                    <i class="bi bi-youtube me-2"></i>Visit Our YouTube Channel
                </a>
            </div>
        </div>
    </section>
    `;
}

// AI PAGE
function aiPage() {
    return `
    <section class="ai-hero-section py-5 reveal-section">
        <div class="container">
            <div class="text-center">
                <h1 class="section-title">Your Civil Engineering AI Study Assistant</h1>
                <p class="section-subtitle">Stuck on a concept? Need a step-by-step explanation? Ask Civil Master AI.</p>
            </div>
        </div>
    </section>
    
    <section class="ai-section py-5 reveal-section">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="ai-chat-interface">
                        <div class="chat-messages" id="chatMessages">
                            <div class="message ai-message">
                                <div class="message-content">
                                    <p>Hello! I'm your Civil Master AI assistant. How can I help you with your civil engineering studies today?</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="suggested-questions">
                            <p class="suggested-label">Try asking:</p>
                            <div class="suggested-buttons">
                                <button class="btn btn-outline-light btn-sm suggested-btn">Explain reinforced concrete</button>
                                <button class="btn btn-outline-light btn-sm suggested-btn">Help with structural analysis</button>
                                <button class="btn btn-outline-light btn-sm suggested-btn">Explain soil mechanics</button>
                                <button class="btn btn-outline-light btn-sm suggested-btn">Practice questions on surveying</button>
                            </div>
                        </div>
                        
                        <div class="chat-input">
                            <input type="text" id="chatInput" class="form-control" placeholder="Ask a question...">
                            <button id="sendBtn" class="btn btn-primary">
                                <i class="bi bi-send"></i>
                            </button>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-6 ai-visual">
                    <div class="ai-illustration">
                        <i class="bi bi-robot"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
}

// CONTACT PAGE
function contactPage() {
    return `
    <section class="contact-hero-section py-5 reveal-section">
        <div class="container">
            <div class="text-center">
                <h1 class="section-title">Contact Us</h1>
                <p class="section-subtitle">Get in touch with the Civil Master team</p>
            </div>
        </div>
    </section>
    
    <section class="contact-section py-5 reveal-section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="contact-card">
                        <div class="contact-info">
                            <div class="contact-item">
                                <i class="bi bi-whatsapp"></i>
                                <div>
                                    <h5>WhatsApp</h5>
                                    <p>+237 651 588 585</p>
                                </div>
                            </div>
                            
                            <div class="contact-item">
                                <i class="bi bi-envelope"></i>
                                <div>
                                    <h5>Email</h5>
                                    <p>civilmaster237@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="contact-buttons">
                            <a href="https://wa.me/237651588585?text=Hello%20Civil%20Master%2C%20I%20would%20like%20to%20make%20an%20inquiry%20about%20the%20app." class="btn btn-success btn-lg me-3" target="_blank" rel="noopener noreferrer">
                                <i class="bi bi-whatsapp me-2"></i>Chat on WhatsApp
                            </a>
                            <a href="mailto:civilmaster237@gmail.com" class="btn btn-outline-primary btn-lg">
                                <i class="bi bi-envelope me-2"></i>Send Email
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Social Media Section -->
    <section class="social-section py-5 reveal-section">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="section-title">Connect With Civil Master</h2>
                <p class="section-subtitle">Follow us on social media for updates and tips</p>
            </div>
            
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="social-links">
                        <a href="https://wa.me/237651588585" class="social-link whatsapp" target="_blank" rel="noopener noreferrer">
                            <i class="bi bi-whatsapp"></i>
                            <span>WhatsApp</span>
                        </a>
                        <a href="https://www.facebook.com/share/1ER8YUbiA9/?mibextid=wwXIfr" class="social-link facebook" target="_blank" rel="noopener noreferrer">
                            <i class="bi bi-facebook"></i>
                            <span>Facebook</span>
                        </a>
                        <a href="https://www.instagram.com/civilmaster.app?stkn=a3hweXIxOHZ0YXI3&utm_source=qr" class="social-link instagram" target="_blank" rel="noopener noreferrer">
                            <i class="bi bi-instagram"></i>
                            <span>Instagram</span>
                        </a>
                        <a href="https://www.tiktok.com/@civilmaster.app?_r=1&_t=ZN-99ggg2NjGVC" class="social-link tiktok" target="_blank" rel="noopener noreferrer">
                            <i class="bi bi-tiktok"></i>
                            <span>TikTok</span>
                        </a>
                        <a href="https://www.linkedin.com/in/civil-master-bb8795369?utm_source=share_via&utm_content=profile&utm_medium=member_ios" class="social-link linkedin" target="_blank" rel="noopener noreferrer">
                            <i class="bi bi-linkedin"></i>
                            <span>LinkedIn</span>
                        </a>
                        <a href="https://youtube.com/@civilmaster-r2i?si=1mjBWdFVcarhud97" class="social-link youtube" target="_blank" rel="noopener noreferrer">
                            <i class="bi bi-youtube"></i>
                            <span>YouTube</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
}

// Create global router instance
const router = new Router();

// Register routes
router.register('home', homePage);
router.register('about', aboutPage);
router.register('explore', explorePage);
router.register('resources', resourcesPage);
router.register('subjects', subjectsPage);
router.register('tutorials', tutorialsPage);
router.register('ai', aiPage);
router.register('contact', contactPage);
