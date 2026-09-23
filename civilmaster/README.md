# Civil Master Official Website

A modern, professional, and highly responsive website for Civil Master - an educational platform designed for civil engineering students.

## Overview

Civil Master is a product of AGHA, providing civil engineering students with access to academic resources, past questions, tutorials, notes, videos, practice resources, and AI-powered learning assistance.

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom styling with CSS variables
- **Bootstrap 5** - Responsive framework
- **Vanilla JavaScript ES6+** - Interactive functionality
- **Bootstrap Icons** - Icon library

## Features

### Core Sections
- **Hero Section** - Powerful introduction with CTAs for download and WhatsApp
- **App Screenshot Showcase** - Carousel displaying app features
- **Features Section** - Past Questions, Notes, Tutorials, Videos, Practice, AI
- **Subjects/Learning Categories** - Browse civil engineering topics
- **How It Works** - 4-step guide to get started
- **Why Civil Master** - Benefits and advantages
- **Video Section** - Tutorial videos with modal player
- **AI Assistant** - Interactive chat interface simulation
- **Social Media** - Links to all official profiles
- **Download Section** - Google Play Store integration
- **Contact Section** - WhatsApp and email contact
- **FAQ Section** - Accordion-style questions and answers
- **Testimonials** - Student feedback (placeholder structure)
- **AGHA Products** - Showcase of AGHA's product portfolio
- **Footer** - Comprehensive navigation and legal links

### Interactive Features
- **Global Search** - Search across all content
- **AI Chat Simulation** - Frontend AI assistant with typing animation
- **Practice Quiz** - Interactive quiz with scoring
- **Modals** - Past Questions, Notes, Tutorials, Practice, Video Player
- **Floating WhatsApp Button** - Always accessible contact
- **Smooth Scrolling** - Enhanced navigation experience
- **Scroll Animations** - Fade-in effects on scroll
- **Responsive Navigation** - Hamburger menu for mobile

## Project Structure

```
civilmaster/
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # Custom CSS styles
├── js/
│   ├── config.js          # Centralized configuration
│   ├── data.js            # Mock data for frontend
│   └── main.js            # Main JavaScript functionality
├── assets/
│   ├── images/
│   │   ├── civil-master-logo-placeholder.svg
│   │   ├── agha-logo-placeholder.svg
│   │   └── phone-mockup-placeholder.svg
│   ├── screenshots/
│   │   ├── home-placeholder.svg
│   │   ├── past-questions-placeholder.svg
│   │   ├── notes-placeholder.svg
│   │   ├── tutorials-placeholder.svg
│   │   ├── videos-placeholder.svg
│   │   ├── ai-placeholder.svg
│   │   ├── subjects-placeholder.svg
│   │   ├── quiz-placeholder.svg
│   │   └── progress-placeholder.svg
│   └── videos/
│       ├── video-1-placeholder.svg
│       ├── video-2-placeholder.svg
│       ├── video-3-placeholder.svg
│       ├── video-4-placeholder.svg
│       ├── video-5-placeholder.svg
│       └── video-6-placeholder.svg
└── README.md              # This file
```

## Setup Instructions

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for testing)

### Installation

1. **Clone or download the project**
   ```bash
   cd civilmaster
   ```

2. **Open the website**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (with http-server)
     npx http-server
     ```

3. **Access the website**
   - If using a local server: `http://localhost:8000`
   - If opening directly: Double-click `index.html`

## Configuration

### Update External Links

Edit `js/config.js` to update all external links when the actual URLs are available:

```javascript
const CONFIG = {
    // Civil Master Links
    CIVIL_MASTER_GOOGLE_PLAY_URL: '[CIVIL_MASTER_GOOGLE_PLAY_URL]',
    CIVIL_MASTER_CANONICAL_URL: '[CIVIL_MASTER_CANONICAL_URL]',
    
    // Social Media Links
    FACEBOOK_URL: '[CIVIL_MASTER_FACEBOOK_URL]',
    INSTAGRAM_URL: '[CIVIL_MASTER_INSTAGRAM_URL]',
    TIKTOK_URL: '[CIVIL_MASTER_TIKTOK_URL]',
    LINKEDIN_URL: '[CIVIL_MASTER_LINKEDIN_URL]',
    YOUTUBE_URL: '[CIVIL_MASTER_YOUTUBE_URL]',
    
    // AGHA Product Links
    TALK_TRADE_URL: '[TALK_TRADE_URL]',
    BUEA_MARKET_URL: '[BUEA_MARKET_URL]',
    AGHA_AI_URL: '[AGHA_AI_URL]'
};
```

### Replace Placeholder Assets

Replace the SVG placeholder assets in the `assets/` directory with actual images:

1. **Logos**
   - `assets/images/civil-master-logo-placeholder.svg` → Civil Master logo
   - `assets/images/agha-logo-placeholder.svg` → AGHA logo

2. **Screenshots**
   - Replace all files in `assets/screenshots/` with actual app screenshots

3. **Video Thumbnails**
   - Replace all files in `assets/videos/` with actual video thumbnails

### Update Mock Data

Edit `js/data.js` to update or expand the mock data:

- `SUBJECTS_DATA` - Add more subjects
- `VIDEOS_DATA` - Add more videos with real URLs
- `PAST_QUESTIONS_DATA` - Add more past questions
- `NOTES_DATA` - Add more notes
- `TUTORIALS_DATA` - Add more tutorials
- `PRACTICE_QUESTIONS_DATA` - Add more practice questions
- `AI_RESPONSES` - Add more AI responses

## Customization

### Brand Colors

Edit CSS variables in `css/styles.css`:

```css
:root {
    --primary-color: #1E3A8A; /* Royal Blue */
    --accent-color: #F97316; /* Orange */
    /* ... other colors */
}
```

### Typography

The website uses Google Fonts (Inter). To change the font:

1. Update the Google Fonts link in `index.html`
2. Update the font-family in `css/styles.css`

## Responsive Design

The website is fully responsive and tested on:

- Mobile: 320px, 360px, 375px, 390px, 414px
- Tablet: 768px, 1024px
- Desktop: 1280px, 1440px, 1920px

## Accessibility

The website follows modern accessibility practices:

- Semantic HTML
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation
- Visible focus states
- ARIA labels where necessary
- Respects `prefers-reduced-motion`

## SEO

The website includes:

- Proper page title
- Meta description
- Open Graph metadata
- Twitter/X card metadata
- Canonical URL placeholder
- Structured headings
- Semantic HTML

Update the SEO metadata in `index.html` when the actual URLs are available.

## Performance

Optimizations include:

- Lazy-loaded images (when using real images)
- Optimized image formats
- Minimal unnecessary JavaScript
- Lightweight animations
- CDN-hosted Bootstrap and icons

## Future Expansion

The code is structured to easily connect to a real backend:

### Service Layer Architecture
Create service files in `js/services/`:

- `authService.js` - Authentication
- `questionService.js` - Questions API
- `notesService.js` - Notes API
- `videoService.js` - Videos API
- `aiService.js` - AI API

### Backend Integration
Replace mock data in `js/data.js` with API calls:

```javascript
// Example
async function fetchSubjects() {
    const response = await fetch('/api/subjects');
    return response.json();
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contact Information

- **WhatsApp**: +237 651 588 585
- **Email**: civilmaster237@gmail.com

## License

© 2026 Civil Master. A product of AGHA. All rights reserved.

## Support

For issues or questions, contact the Civil Master team via WhatsApp or email.

---

**Built with ❤️ for civil engineering students**
