const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.textContent = isOpen ? '×' : '☰';
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (menuButton) menuButton.textContent = '☰';
}));
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#enquiry-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = String(form.get('name') || '').trim();
  const need = String(form.get('need') || '').trim();
  const message = String(form.get('message') || '').trim();
  const body = `Hello KAIROS,%0A%0AMy name is ${encodeURIComponent(name)}.%0AEnquiry: ${encodeURIComponent(need)}.%0ADetails: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/7219803996?text=${body}`, '_blank', 'noopener');
});

/* Premium interaction layer */
document.documentElement.classList.add('reveal-ready');
const revealTargets = document.querySelectorAll('section, .service-card, .gallery-card, .section-heading, .intro-content, .contact-form');
revealTargets.forEach(el => el.classList.add('reveal'));
if ('IntersectionObserver' in window) {
 const revealObserver = new IntersectionObserver((entries, observer) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }); }, { threshold:0.12, rootMargin:'0px 0px -35px 0px' });
 revealTargets.forEach(el => revealObserver.observe(el));
} else { revealTargets.forEach(el => el.classList.add('is-visible')); }
const header = document.querySelector('.site-header');
const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 12);
window.addEventListener('scroll', updateHeader, { passive:true }); updateHeader();
document.querySelectorAll('img').forEach(img => { img.addEventListener('error', () => { img.classList.add('image-unavailable'); img.style.minHeight = img.style.minHeight || '180px'; img.style.objectFit = 'cover'; img.title = 'Demo visual fallback — replace with approved project photography.'; if (!img.dataset.fallbackApplied) { img.dataset.fallbackApplied = 'true'; img.src = 'assets/image-fallback.svg'; } }, { once:true }); });

// Staggered image reveal for the expanded portfolio gallery
(function(){const items=document.querySelectorAll('[data-reveal]');if(!('IntersectionObserver' in window)){items.forEach(el=>el.classList.add('is-visible'));return;}const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');io.unobserve(entry.target);}}),{threshold:.12,rootMargin:'0px 0px -30px 0px'});items.forEach(el=>io.observe(el));})();
