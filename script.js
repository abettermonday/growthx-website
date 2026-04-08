// Mobile nav toggle
const toggle = document.querySelector('.nav__toggle');
const links = document.querySelector('.nav__links');

toggle.addEventListener('click', () => {
  links.classList.toggle('open');
});

// Close mobile nav on link click
links.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => links.classList.remove('open'));
});

// Scroll-triggered fade-up animations
const animEls = document.querySelectorAll(
  '.approach__block, .audience-card, .testimonial, .clients .section__label, .clients .section__title, .testimonials .section__label, .testimonials .section__title, .contact__title, .contact__sub, .contact__links'
);
animEls.forEach(el => el.classList.add('fade-up'));

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.05 }
);

animEls.forEach(el => observer.observe(el));
