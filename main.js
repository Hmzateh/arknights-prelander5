// =============================================
// CONFIGURATION - Modifier ici
// =============================================

const CONFIG = {
    // Logo
    logoTop: "ARKNIGHTS",
    logoMain: "ENDFIELD",

    // Headline (utiliser {{highlight}} pour le texte en jaune)
    headline: "Will you unlock a {{6★ operator}} today?",

    // Subtitle
    subtitle: "Download the official PC launcher and claim 135 FREE pulls instantly.",

    // Features
    features: [
        "Tactical anime RPG built for PC",
        "Official Windows launcher required",
        "Full installation unlocks rewards",
        "Limited-time launch bonuses"
    ],

    // CTA Button (rotating text)
    ctaTexts: [
        "CLICK TO PLAY ENDFIELD",
        "PLAY NOW"
    ],
    ctaLink: "https://www.gamazi.com/cmp/559HM1H/2CXDQH8/?sub1=22457",

    // Hero Image (right side)
    heroImage: "hero-endfield.png",

    // Disclaimer
    disclaimer: "100% FREE · Windows (PC only)"
};

// =============================================
// APPLICATION - Ne pas modifier
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    // Logo
    document.querySelector('.logo-top').textContent = CONFIG.logoTop;
    document.querySelector('.logo-main').textContent = CONFIG.logoMain;

    // Headline avec highlight
    const headlineEl = document.querySelector('.headline');
    const headlineText = CONFIG.headline.replace(
        /\{\{(.+?)\}\}/g, 
        '<span>$1</span>'
    );
    headlineEl.innerHTML = headlineText;

    // Subtitle
    document.querySelector('.subtitle').textContent = CONFIG.subtitle;

    // Features
    const featuresEl = document.querySelector('.features');
    if (featuresEl) {
        featuresEl.innerHTML = CONFIG.features
            .map(f => `<li>${f}</li>`)
            .join('');
    }

    // CTA with rotation
    const ctaBtn = document.querySelector('.cta-button');
    const ctaTextEl = ctaBtn.querySelector('.cta-text');
    ctaBtn.href = CONFIG.ctaLink;
    
    let ctaIndex = 0;
    ctaTextEl.textContent = CONFIG.ctaTexts[0];
    
    setInterval(() => {
        ctaTextEl.style.opacity = '0';
        setTimeout(() => {
            ctaIndex = (ctaIndex + 1) % CONFIG.ctaTexts.length;
            ctaTextEl.textContent = CONFIG.ctaTexts[ctaIndex];
            ctaTextEl.style.opacity = '1';
        }, 150);
    }, 2000);

    // Hero Image
    const heroImg = document.querySelector('.hero-image img');
    if (heroImg) {
        heroImg.src = CONFIG.heroImage;
    }

    // Disclaimer
    document.querySelector('.disclaimer').textContent = CONFIG.disclaimer;
});
