// Treep — デザインカンプ用の最小インタラクション
document.addEventListener('DOMContentLoaded', () => {
  // header scroll shadow
  const header = document.querySelector('.site-header');
  const onScroll = () => header && header.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  }

  // scroll reveal
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // demo form (no backend in mockup)
  const form = document.querySelector('form[data-demo]');
  if (form) form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('【デザインカンプ】送信処理は本実装時に Formspree / Cloudflare Functions で接続します。');
  });
});
