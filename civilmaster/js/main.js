// ==========================================
// CIVIL MASTER - MAIN JAVASCRIPT
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    // Ensure page starts at top on load
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
    // Initialize router first to load content
    console.log('Initializing router...');
    const pageContainer = document.getElementById('page-content');
    console.log('Page container found:', pageContainer);
    
    // Initialize all components
    initNavbar();
    initSubjects();
    initVideos();
    initAIChat();
    initSearch();
    initModals();
    initAnimations();
    initThemeToggle();
    initScrollReveal();
    initPageLoadAnimation();
    initTooltips();
    
    // Force home page load
    console.log('Forcing home page load...');
    if (typeof router !== 'undefined' && router) {
        router.navigate('home', false);
        console.log('Home page loaded');
        console.log('Page container innerHTML:', pageContainer ? pageContainer.innerHTML.substring(0, 100) : 'not found');
    } else {
        console.error('Router not available');
    }
});

// Also ensure scroll to top on window load
window.addEventListener('load', function() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// ==========================================
// NAVBAR
// ==========================================
function initNavbar() {
    const navbar = document.getElementById('mainNavbar');
    
    // Add scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow');
        } else {
            navbar.classList.remove('shadow');
        }
    });
    
    // Close mobile menu on link click
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.getElementById('navbarNav');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 992) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: true
                });
            }
        });
    });
}

// ==========================================
// SUBJECTS
// ==========================================
function initSubjects() {
    const subjectsGrid = document.getElementById('subjectsGrid');
    
    if (subjectsGrid && typeof SUBJECTS_DATA !== 'undefined') {
        SUBJECTS_DATA.forEach(subject => {
            const subjectCard = document.createElement('div');
            subjectCard.className = 'col-lg-4 col-md-6';
            subjectCard.innerHTML = `
                <div class="subject-card">
                    <div class="subject-icon">
                        <i class="bi ${subject.icon}"></i>
                    </div>
                    <h5>${subject.name}</h5>
                    <p>${subject.description}</p>
                    <span class="resource-count">${subject.resourceCount} resources</span>
                    <button class="btn btn-outline-primary btn-sm" onclick="exploreSubject(${subject.id})">
                        Explore <i class="bi bi-arrow-right ms-1"></i>
                    </button>
                </div>
            `;
            subjectsGrid.appendChild(subjectCard);
        });
    }
}

function exploreSubject(subjectId) {
    // Map subject IDs to modal IDs
    const modalMap = {
        1: 'structuralModal',      // Structural Engineering
        2: 'soilModal',            // Geotechnical Engineering (Soil)
        3: 'transportModal',       // Transportation Engineering
        4: 'fluidModal',           // Hydraulics (Fluid Mechanics)
        5: 'surveyingModal',      // Surveying
        6: 'materialsModal',       // Construction Technology (Materials)
        7: 'materialsModal',      // Building Materials
        8: 'mathModal',           // Engineering Mathematics
        9: 'environmentalModal',   // Environmental Engineering
        10: 'fluidModal',         // Fluid Mechanics
        11: 'soilModal',          // Soil Mechanics
        12: 'structuralModal'     // Reinforced Concrete
    };
    
    const modalId = modalMap[subjectId];
    
    if (modalId) {
        const modalElement = document.getElementById(modalId);
        if (modalElement) {
            const modal = new bootstrap.Modal(modalElement);
            modal.show();
        } else {
            console.error(`Modal with ID ${modalId} not found`);
        }
    } else {
        console.error(`No modal mapped for subject ID ${subjectId}`);
    }
}

// ==========================================
// VIDEOS
// ==========================================
function initVideos() {
    const videosGrid = document.getElementById('videosGrid');
    
    if (videosGrid && typeof VIDEOS_DATA !== 'undefined') {
        VIDEOS_DATA.forEach(video => {
            const videoCard = document.createElement('div');
            videoCard.className = 'col-lg-4 col-md-6';
            videoCard.innerHTML = `
                <div class="video-card" onclick="openVideoModal(${video.id})">
                    <div class="video-thumbnail">
                        <img src="${video.thumbnail}" alt="${video.title}">
                        <div class="play-button">
                            <i class="bi bi-play-fill"></i>
                        </div>
                    </div>
                    <div class="video-content">
                        <span class="video-category">${video.category}</span>
                        <h5>${video.title}</h5>
                        <p>${video.description}</p>
                        <span class="video-duration"><i class="bi bi-clock me-1"></i>${video.duration}</span>
                    </div>
                </div>
            `;
            videosGrid.appendChild(videoCard);
        });
    }
}

function openVideoModal(videoId) {
    const video = VIDEOS_DATA.find(v => v.id === videoId);
    if (video) {
        const modalTitle = document.getElementById('videoModalTitle');
        const videoPlayer = document.getElementById('videoPlayer');
        
        modalTitle.textContent = video.title;
        
        // Extract YouTube video ID from URL
        const videoIdFromUrl = extractYouTubeId(video.url);
        
        if (videoIdFromUrl) {
            // Embed YouTube video
            videoPlayer.innerHTML = `
                <div class="ratio ratio-16x9">
                    <iframe 
                        src="https://www.youtube.com/embed/${videoIdFromUrl}?rel=0" 
                        title="${video.title}" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
                <p class="mt-3 text-muted">${video.description}</p>
                <p class="small"><strong>Category:</strong> ${video.category} | <strong>Duration:</strong> ${video.duration}</p>
            `;
        } else {
            // Fallback if URL is not valid
            videoPlayer.innerHTML = `
                <div class="text-center">
                    <i class="bi bi-exclamation-circle" style="font-size: 4rem; margin-bottom: 1rem; color: var(--warning-color);"></i>
                    <p>Unable to load video</p>
                    <p class="text-muted">Video URL: ${video.url}</p>
                    <a href="${video.url}" target="_blank" class="btn btn-primary mt-2">
                        <i class="bi bi-youtube me-2"></i>Watch on YouTube
                    </a>
                </div>
            `;
        }
        
        const videoModal = new bootstrap.Modal(document.getElementById('videoModal'));
        videoModal.show();
    }
}

// Helper function to extract YouTube video ID from URL
function extractYouTubeId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    
    if (match && match[2].length === 11) {
        return match[2];
    }
    return null;
}

// ==========================================
// AI CHAT
// ==========================================
function initAIChat() {
    const chatInput = document.getElementById('chatInput');
    const sendBtn = document.getElementById('sendBtn');
    const suggestedButtons = document.querySelectorAll('.suggested-btn');
    
    // Send message on button click
    if (sendBtn) {
        sendBtn.addEventListener('click', sendMessage);
    }
    
    // Send message on Enter key
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
    
    // Suggested questions
    suggestedButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            if (chatInput) {
                chatInput.value = this.textContent;
                sendMessage();
            }
        });
    });
}

function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');
    
    if (!chatInput || !chatMessages) return;
    
    const message = chatInput.value.trim();
    if (!message) return;
    
    // Add user message
    addMessage(message, 'user');
    chatInput.value = '';
    
    // Show typing indicator
    showTypingIndicator();
    
    // Simulate AI response after delay
    setTimeout(() => {
        removeTypingIndicator();
        const response = getAIResponse(message);
        addMessage(response, 'ai');
    }, 1500);
}

function addMessage(text, type) {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}-message`;
    messageDiv.innerHTML = `
        <div class="message-content">
            <p>${text.replace(/\n/g, '<br>')}</p>
        </div>
    `;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTypingIndicator() {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;
    
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message ai-message typing-indicator';
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = `
        <div class="message-content">
            <p><i class="bi bi-three-dots"></i> Typing...</p>
        </div>
    `;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function getAIResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Check for predefined responses
    for (const [key, response] of Object.entries(AI_RESPONSES)) {
        if (lowerMessage.includes(key)) {
            return response;
        }
    }
    
    // Default response
    return "I'm here to help you with civil engineering concepts. You can ask me about structural analysis, soil mechanics, concrete design, surveying, or any other civil engineering topic. What would you like to know?";
}

// ==========================================
// SEARCH
// ==========================================
function initSearch() {
    const searchInput = document.getElementById('globalSearch');
    const searchResults = document.getElementById('searchResults');
    
    if (!searchInput || !searchResults) return;
    
    let searchTimeout;
    
    searchInput.addEventListener('input', function(e) {
        clearTimeout(searchTimeout);
        const query = e.target.value.trim();
        
        if (query.length < 2) {
            searchResults.innerHTML = '';
            return;
        }
        
        searchTimeout = setTimeout(() => {
            performSearch(query, searchResults);
        }, 300);
    });
}

function performSearch(query, resultsContainer) {
    const lowerQuery = query.toLowerCase();
    const results = SEARCH_INDEX.filter(item => 
        item.title.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery)
    ).slice(0, 10);
    
    if (results.length === 0) {
        resultsContainer.innerHTML = `
            <div class="text-center py-4">
                <i class="bi bi-search" style="font-size: 2rem; color: var(--text-light);"></i>
                <p class="mt-2 text-muted">No results found for "${query}"</p>
            </div>
        `;
        return;
    }
    
    resultsContainer.innerHTML = results.map(result => `
        <div class="search-result-item" onclick="window.location.href='${result.url}'">
            <span class="search-result-type">${result.type}</span>
            <h6>${result.title}</h6>
            <p>${result.description}</p>
        </div>
    `).join('');
}

// ==========================================
// MODALS
// ==========================================
function initModals() {
    // Past Questions Modal
    const pastQuestionsModal = document.getElementById('pastQuestionsModal');
    if (pastQuestionsModal) {
        pastQuestionsModal.addEventListener('show.bs.modal', loadPastQuestions);
    }
    
    // Notes Modal
    const notesModal = document.getElementById('notesModal');
    if (notesModal) {
        notesModal.addEventListener('show.bs.modal', loadNotes);
    }
    
    // Tutorials Modal
    const tutorialsModal = document.getElementById('tutorialsModal');
    if (tutorialsModal) {
        tutorialsModal.addEventListener('show.bs.modal', loadTutorials);
    }
    
    // Practice Modal
    const practiceModal = document.getElementById('practiceModal');
    if (practiceModal) {
        practiceModal.addEventListener('show.bs.modal', loadPracticeQuestions);
    }
}

function loadPastQuestions() {
    const content = document.getElementById('pastQuestionsContent');
    if (!content) return;
    
    content.innerHTML = `
        <div class="mb-3">
            <input type="text" class="form-control" placeholder="Search past questions..." id="pastQuestionsSearch">
        </div>
        <div class="row g-3">
            ${PAST_QUESTIONS_DATA.map(pq => `
                <div class="col-md-6">
                    <div class="card h-100">
                        <div class="card-body">
                            <h6 class="card-title">${pq.subject}</h6>
                            <p class="card-text text-muted">Year: ${pq.year}</p>
                            <p class="card-text">${pq.questionCount} questions</p>
                            <p class="card-text small">Topics: ${pq.topics.join(', ')}</p>
                            <button class="btn btn-primary btn-sm">View Questions</button>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function loadNotes() {
    const content = document.getElementById('notesContent');
    if (!content) return;
    
    content.innerHTML = `
        <div class="mb-3">
            <input type="text" class="form-control" placeholder="Search notes..." id="notesSearch">
        </div>
        <div class="row g-3">
            ${NOTES_DATA.map(note => `
                <div class="col-md-6">
                    <div class="card h-100">
                        <div class="card-body">
                            <h6 class="card-title">${note.subject} - ${note.topic}</h6>
                            <p class="card-text">${note.content}</p>
                            <p class="card-text text-muted small">${note.pageCount} pages</p>
                            <button class="btn btn-primary btn-sm">Read Note</button>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function loadTutorials() {
    const content = document.getElementById('tutorialsContent');
    if (!content) return;
    
    content.innerHTML = `
        <div class="mb-3">
            <input type="text" class="form-control" placeholder="Search tutorials..." id="tutorialsSearch">
        </div>
        <div class="row g-3">
            ${TUTORIALS_DATA.map(tutorial => `
                <div class="col-md-6">
                    <div class="card h-100">
                        <div class="card-body">
                            <h6 class="card-title">${tutorial.title}</h6>
                            <p class="card-text text-muted">${tutorial.category}</p>
                            <p class="card-text">${tutorial.steps} steps</p>
                            <span class="badge bg-info">${tutorial.difficulty}</span>
                            <button class="btn btn-primary btn-sm mt-2">Start Tutorial</button>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// ==========================================
// PRACTICE QUIZ
// ==========================================
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

function loadPracticeQuestions() {
    const content = document.getElementById('practiceContent');
    if (!content) return;
    
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    
    content.innerHTML = `
        <div id="quizContainer">
            <div class="quiz-header mb-3">
                <h5>Practice Quiz</h5>
                <p class="text-muted">Test your knowledge with these practice questions</p>
            </div>
            <div id="questionContainer"></div>
            <div class="quiz-footer mt-3">
                <button id="nextBtn" class="btn btn-primary" onclick="nextQuestion()">Next Question</button>
                <button id="submitBtn" class="btn btn-success d-none" onclick="submitQuiz()">Submit Quiz</button>
            </div>
            <div id="quizResults" class="mt-3 d-none"></div>
        </div>
    `;
    
    displayQuestion();
}

function displayQuestion() {
    const questionContainer = document.getElementById('questionContainer');
    if (!questionContainer) return;
    
    const question = PRACTICE_QUESTIONS_DATA[currentQuestionIndex];
    
    questionContainer.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h6 class="card-title">Question ${currentQuestionIndex + 1} of ${PRACTICE_QUESTIONS_DATA.length}</h6>
                <p class="card-text">${question.question}</p>
                <div class="options-list">
                    ${question.options.map((option, index) => `
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="answer" id="option${index}" value="${index}">
                            <label class="form-check-label" for="option${index}">
                                ${option}
                            </label>
                        </div>
                    `).join('')}
                </div>
                <div id="feedback" class="mt-3"></div>
            </div>
        </div>
    `;
    
    // Update button visibility
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    if (currentQuestionIndex === PRACTICE_QUESTIONS_DATA.length - 1) {
        nextBtn.classList.add('d-none');
        submitBtn.classList.remove('d-none');
    } else {
        nextBtn.classList.remove('d-none');
        submitBtn.classList.add('d-none');
    }
}

function nextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
        alert('Please select an answer');
        return;
    }
    
    const answerIndex = parseInt(selectedAnswer.value);
    const question = PRACTICE_QUESTIONS_DATA[currentQuestionIndex];
    
    // Show feedback
    const feedback = document.getElementById('feedback');
    if (answerIndex === question.correctAnswer) {
        score++;
        feedback.innerHTML = `<div class="alert alert-success"><i class="bi bi-check-circle"></i> Correct!</div>`;
    } else {
        feedback.innerHTML = `
            <div class="alert alert-danger">
                <i class="bi bi-x-circle"></i> Incorrect.
                <br><small>${question.explanation}</small>
            </div>
        `;
    }
    
    userAnswers.push({
        questionId: question.id,
        selectedAnswer: answerIndex,
        correct: answerIndex === question.correctAnswer
    });
    
    // Disable options
    document.querySelectorAll('input[name="answer"]').forEach(input => {
        input.disabled = true;
    });
    
    // Move to next question after delay
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < PRACTICE_QUESTIONS_DATA.length) {
            displayQuestion();
        }
    }, 1500);
}

function submitQuiz() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
        alert('Please select an answer');
        return;
    }
    
    const answerIndex = parseInt(selectedAnswer.value);
    const question = PRACTICE_QUESTIONS_DATA[currentQuestionIndex];
    
    if (answerIndex === question.correctAnswer) {
        score++;
    }
    
    userAnswers.push({
        questionId: question.id,
        selectedAnswer: answerIndex,
        correct: answerIndex === question.correctAnswer
    });
    
    // Show results
    const questionContainer = document.getElementById('questionContainer');
    const quizResults = document.getElementById('quizResults');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    if (questionContainer) questionContainer.classList.add('d-none');
    if (nextBtn) nextBtn.classList.add('d-none');
    if (submitBtn) submitBtn.classList.add('d-none');
    if (quizResults) {
        quizResults.classList.remove('d-none');
        const percentage = Math.round((score / PRACTICE_QUESTIONS_DATA.length) * 100);
        quizResults.innerHTML = `
            <div class="card">
                <div class="card-body text-center">
                    <h5>Quiz Results</h5>
                    <div class="score-display my-3">
                        <h2>${score} / ${PRACTICE_QUESTIONS_DATA.length}</h2>
                        <p class="text-muted">${percentage}% Correct</p>
                    </div>
                    <button class="btn btn-primary" onclick="loadPracticeQuestions()">Try Again</button>
                </div>
            </div>
        `;
    }
}

// ==========================================
// SMOOTH SCROLL
// ==========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const offsetTop = targetElement.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==========================================
// ANIMATIONS
// ==========================================
function initAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    document.querySelectorAll('.feature-card, .subject-card, .video-card, .step-card, .why-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Format number with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Get URL parameter
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Copy to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Show toast notification
        showToast('Copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// Show toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        background: var(--primary-color);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 2000;
        animation: fadeInUp 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'fadeInUp 0.3s ease reverse';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ==========================================
// THEME TOGGLE
// ==========================================
function initThemeToggle() {
    console.log('initThemeToggle called');
    const themeToggle = document.getElementById('themeToggle');
    
    if (!themeToggle) {
        console.error('Theme toggle button not found');
        return;
    }
    
    console.log('Theme toggle button found:', themeToggle);
    const icon = themeToggle.querySelector('i');
    console.log('Icon element:', icon);
    
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    console.log('Saved theme:', savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    console.log('Theme initialized to:', savedTheme);
    console.log('Current data-theme attribute:', document.documentElement.getAttribute('data-theme'));
    
    // Remove any existing event listeners by cloning
    const newToggle = themeToggle.cloneNode(true);
    themeToggle.parentNode.replaceChild(newToggle, themeToggle);
    
    // Toggle theme on button click
    newToggle.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Theme toggle button clicked');
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        console.log('Current theme before toggle:', currentTheme);
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        console.log('New theme after toggle:', newTheme);
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        const newIcon = newToggle.querySelector('i');
        if (newIcon) {
            if (newTheme === 'dark') {
                newIcon.classList.remove('bi-moon');
                newIcon.classList.add('bi-sun');
            } else {
                newIcon.classList.remove('bi-sun');
                newIcon.classList.add('bi-moon');
            }
        }
        console.log('Theme changed from', currentTheme, 'to', newTheme);
        console.log('data-theme attribute after change:', document.documentElement.getAttribute('data-theme'));
    });
    
    function updateThemeIcon(theme) {
        console.log('Updating icon for theme:', theme);
        if (!icon) {
            console.error('Icon element not found');
            return;
        }
        if (theme === 'dark') {
            icon.classList.remove('bi-moon');
            icon.classList.add('bi-sun');
            console.log('Icon changed to sun');
        } else {
            icon.classList.remove('bi-sun');
            icon.classList.add('bi-moon');
            console.log('Icon changed to moon');
        }
    }
}

// Reinitialize theme toggle after navigation
function reinitializeThemeToggle() {
    console.log('reinitializeThemeToggle called');
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        // Remove existing listeners by cloning
        const newToggle = themeToggle.cloneNode(true);
        themeToggle.parentNode.replaceChild(newToggle, themeToggle);
        
        const icon = newToggle.querySelector('i');
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        if (icon) {
            if (currentTheme === 'dark') {
                icon.classList.remove('bi-moon');
                icon.classList.add('bi-sun');
            } else {
                icon.classList.remove('bi-sun');
                icon.classList.add('bi-moon');
            }
        }
        
        newToggle.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Theme toggle button clicked (reinitialized)');
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            const newIcon = newToggle.querySelector('i');
            if (newIcon) {
                if (newTheme === 'dark') {
                    newIcon.classList.remove('bi-moon');
                    newIcon.classList.add('bi-sun');
                } else {
                    newIcon.classList.remove('bi-sun');
                    newIcon.classList.add('bi-moon');
                }
            }
            console.log('Theme changed from', currentTheme, 'to', newTheme);
        });
    }
}

// ==========================================
// TOOLTIPS
// ==========================================
function initTooltips() {
    // Initialize Bootstrap tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
}

// ==========================================
// ERROR HANDLING
// ==========================================
window.addEventListener('error', function(e) {
    console.error('An error occurred:', e.error);
    // You could send this to an error tracking service
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
});

// ==========================================
// SERVICE WORKER REGISTRATION (Optional)
// ==========================================
if ('serviceWorker' in navigator) {
    // Register service worker for PWA support
    // navigator.serviceWorker.register('/sw.js')
    //     .then(registration => console.log('SW registered'))
    //     .catch(error => console.log('SW registration failed'));
}

// ==========================================
// SCROLL REVEAL ANIMATIONS
// ==========================================
function initScrollReveal() {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        // If reduced motion is preferred, make all sections visible immediately
        document.querySelectorAll('.reveal-section, .testimonial-card').forEach(el => {
            el.classList.add('visible');
        });
        return;
    }

    // Set up Intersection Observer for scroll reveal animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of element is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Unobserve after revealing for one-time animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with reveal-section class
    document.querySelectorAll('.reveal-section').forEach(el => {
        observer.observe(el);
    });

    // Observe testimonial cards
    document.querySelectorAll('.testimonial-card').forEach(el => {
        observer.observe(el);
    });
}

// ==========================================
// PAGE LOAD ANIMATION
// ==========================================
function initPageLoadAnimation() {
    const pageContent = document.getElementById('page-content');
    if (pageContent) {
        // Trigger page load animation after a small delay
        setTimeout(() => {
            pageContent.classList.add('loaded');
        }, 100);
    }
}

// ==========================================
// INITIALIZATION COMPLETE
// ==========================================
console.log('Civil Master website initialized successfully');
