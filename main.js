// =============================================
// CONFIGURATION - Modifier ici
// =============================================

const CONFIG = {
    // CTA Button (rotating text)
    ctaTexts: [
        "CLICK TO PLAY ENDFIELD",
        "PLAY NOW"
    ],
    ctaLink: "http://to.wendiro.com/o?k=98099624c17e486ca92ac5061e7f9b35&via=22457",

    // Hero Image
    heroImage: "hero-endfield.png"
};

// =============================================
// APPLICATION - Ne pas modifier
// =============================================

document.addEventListener('DOMContentLoaded', function() {
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
    if (heroImg && CONFIG.heroImage) {
        heroImg.src = CONFIG.heroImage;
    }
});
