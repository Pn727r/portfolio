document.addEventListener('DOMContentLoaded', () => {

  /* ========== GSAP SCROLL ANIMATIONS ========== */
  gsap.registerPlugin(ScrollTrigger);

  // Hero entrance
  gsap.from('.hero-badge', { opacity: 0, y: 20, duration: 0.6, delay: 0.2 });
  gsap.from('.hero-name', { opacity: 0, y: 40, duration: 0.8, delay: 0.4 });
  gsap.from('.hero-typed', { opacity: 0, duration: 0.6, delay: 0.8 });
  gsap.from('.hero-desc', { opacity: 0, y: 20, duration: 0.6, delay: 1.0 });
  gsap.from('.hero-btns', { opacity: 0, y: 20, duration: 0.6, delay: 1.2 });
  gsap.from('.hero-stats .stat', { opacity: 0, y: 20, duration: 0.5, stagger: 0.15, delay: 1.4 });

  // All sections
  document.querySelectorAll('section:not(#hero)').forEach(section => {
    const elements = section.querySelectorAll('.label, .heading, .about-grid, .about-text, .info-card, .skill-card, .project-row, .exp-card, .contact-card');
    gsap.from(elements, {
      scrollTrigger: { trigger: section, start: 'top 80%', toggleActions: 'play none none none' },
      opacity: 0, y: 30, duration: 0.6, stagger: 0.1, ease: 'power2.out'
    });
  });

  /* ========== TYPED.JS ========== */
  new Typed('#typed-text', {
    strings: ['AI / Python Engineer', 'AI Agent', 'Odoo Expert', 'Systems Architect'],
    typeSpeed: 60,
    backSpeed: 35,
    loop: true,
    showCursor: true
  });

  /* ========== MOBILE MENU ========== */
  const toggle = document.getElementById('nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    mobileNav.classList.toggle('active');
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      mobileNav.classList.remove('active');
    });
  });

  /* ========== NAV SCROLL EFFECT ========== */
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const curr = window.scrollY;
    if (curr > 50) {
      navbar.style.borderBottomColor = 'rgba(139,92,246,0.15)';
    } else {
      navbar.style.borderBottomColor = 'rgba(255,255,255,0.08)';
    }
    lastScroll = curr;
  });

});
