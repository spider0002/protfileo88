


const navbar  = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

/* Add .scrolled class when user scrolls past 60px
   CSS uses this to apply the frosted-glass background */
function handleNavbarScroll() {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

/* Highlight the nav link whose section is in view */
function setActiveLink() {
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop    = section.offsetTop - 120;  // offset for navbar height
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    /* Match href="#sectionId" to the current section */
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

/* Run both on scroll */
window.addEventListener('scroll', () => {
  handleNavbarScroll();
  setActiveLink();
}, { passive: true });

/* Run once on load */
handleNavbarScroll();
setActiveLink();


/* ================================================
   2. MOBILE MENU — Hamburger toggle
   ================================================ */

const hamburger   = document.getElementById('hamburger');
const mobileMenu  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  /* Toggle open state on both hamburger icon and the menu */
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  /* Update aria attribute for accessibility */
  const isOpen = mobileMenu.classList.contains('open');
  hamburger.setAttribute('aria-expanded', isOpen);
});

/* Close mobile menu when a link is clicked */
mobileMenu.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
  });
});

/* Close mobile menu if user clicks outside of it */
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target)) {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
  }
});




document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');

    /* Skip if it's just "#" with no target */
    if (targetId === '#') return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();

    const navbarHeight = navbar.offsetHeight;
    const targetTop    = target.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.scrollTo({
      top:      targetTop,
      behavior: 'smooth',
    });
  });
});




const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        /* Stop observing after reveal — no need to repeat */
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold:  0.12,   /* Trigger when 12% of the element is visible */
    rootMargin: '0px 0px -40px 0px', /* Slightly before the element hits the bottom edge */
  }
);

/* Observe every element with class "reveal" */
revealElements.forEach(el => revealObserver.observe(el));

/* Hero elements: trigger immediately on load
   so the entrance animation runs right away */
window.addEventListener('load', () => {
  document.querySelectorAll('.hero .reveal').forEach(el => {
    el.classList.add('visible');
  });
});




const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}


/* =========================================
   INTRO
========================================= */

window.addEventListener('load', () => {

    const intro = document.getElementById('intro');

    document.body.style.overflow = 'hidden';

    setTimeout(() => {

        document.body.style.overflow = 'auto';

    }, 5600);

    setTimeout(() => {

        if (intro) {
            intro.remove();
        }

    }, 6600);

});