// ==========================================
// CIVIL MASTER - CONFIGURATION FILE
// ==========================================
// Centralized configuration for all external links
// Update these URLs when the actual links are provided

const CONFIG = {
    // Civil Master Links
    CIVIL_MASTER_GOOGLE_PLAY_URL: 'https://play.google.com/store/apps/details?id=app.rene.civil_master',
    CIVIL_MASTER_CANONICAL_URL: '[CIVIL_MASTER_CANONICAL_URL]',
    CIVIL_MASTER_OG_IMAGE: '[CIVIL_MASTER_OG_IMAGE]',
    CIVIL_MASTER_TWITTER_IMAGE: '[CIVIL_MASTER_TWITTER_IMAGE]',
    
    // Social Media Links
    WHATSAPP_URL: 'https://wa.me/237651588585',
    FACEBOOK_URL: 'https://www.facebook.com/share/1ER8YUbiA9/?mibextid=wwXIfr',
    INSTAGRAM_URL: '[CIVIL_MASTER_INSTAGRAM_URL]',
    TIKTOK_URL: 'https://www.tiktok.com/@civilmaster.app?_r=1&_t=ZN-99gh3Nb11E6',
    LINKEDIN_URL: 'https://www.linkedin.com/in/civil-master-bb8795369?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    YOUTUBE_URL: '[CIVIL_MASTER_YOUTUBE_URL]',
    
    // AGHA Product Links
    TALK_TRADE_URL: '[TALK_TRADE_URL]',
    BUEA_MARKET_URL: '[BUEA_MARKET_URL]',
    AGHA_AI_URL: '[AGHA_AI_URL]',
    CIVIL_MASTER_URL: '#home',
    
    // Contact Information
    WHATSAPP_NUMBER: '+237 651 588 585',
    EMAIL: 'civilmaster237@gmail.com',
    
    // WhatsApp Messages
    WHATSAPP_INQUIRY_MESSAGE: 'Hello Civil Master, I would like to make an inquiry about the app.',
    WHATSAPP_INFO_MESSAGE: 'Hello, I would like to know more about Civil Master.',
    
    // Brand Colors - Exact colors from poster
    PRIMARY_COLOR: '#0050C0',
    PRIMARY_DARK: '#0040B0',
    PRIMARY_LIGHT: '#0050B8',
    ACCENT_COLOR: '#F86800',
    ACCENT_DARK: '#E05800',
    ACCENT_LIGHT: '#FF7800',
    
    // App Info
    APP_NAME: 'Civil Master',
    COMPANY_NAME: 'AGHA',
    APP_DESCRIPTION: 'Civil Master is an educational platform for civil engineering students, providing past questions, notes, tutorials, videos, practice resources and AI-powered learning assistance.',
    
    // SEO
    PAGE_TITLE: 'Civil Master | Civil Engineering Learning Platform',
    META_DESCRIPTION: 'Civil Master is an educational platform for civil engineering students, providing past questions, notes, tutorials, videos, practice resources and AI-powered learning assistance.',
    
    // Animation Settings
    ANIMATION_DURATION: 300,
    SCROLL_OFFSET: 100,
    
    // Search Settings
    SEARCH_DEBOUNCE_DELAY: 300,
    MAX_SEARCH_RESULTS: 10
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
