/* BEGINNER SETUP: put the café's real WhatsApp number below.
   Use country code + number, digits only. For Sri Lanka, replace the leading
   local 0 with 94. Leave empty for safe portfolio demo mode. */
const WHATSAPP_NUMBER = '';
const WHATSAPP_MESSAGE = 'Hello Ceylon & Crumb! I would like to ask about a table.';

// Mobile navigation: HTML links remain available if JavaScript is off.
const toggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('#navigation');
const mobile = window.matchMedia('(max-width: 760px)');
function closeNavigation() {
  navigation.classList.add('collapsed');
  toggle.setAttribute('aria-expanded', 'false');
}
function syncNavigation() {
  toggle.hidden = !mobile.matches;
  if (mobile.matches) closeNavigation();
  else navigation.classList.remove('collapsed');
}
toggle.addEventListener('click', () => {
  const isOpen = toggle.getAttribute('aria-expanded') === 'true';
  navigation.classList.toggle('collapsed', isOpen);
  toggle.setAttribute('aria-expanded', String(!isOpen));
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a') && mobile.matches) closeNavigation();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobile.matches && toggle.getAttribute('aria-expanded') === 'true') {
    closeNavigation();
    toggle.focus();
  }
});
mobile.addEventListener('change', syncNavigation);
syncNavigation();

// Menu category buttons. Change cards and prices directly in index.html.
const filters = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('[data-category]');
filters.forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  let count = 0;
  cards.forEach(card => {
    card.hidden = category !== 'all' && card.dataset.category !== category;
    if (!card.hidden) count++;
  });
  filters.forEach(filter => {
    const selected = filter === button;
    filter.classList.toggle('active', selected);
    filter.setAttribute('aria-pressed', String(selected));
  });
  document.querySelector('#menu-status').textContent = `Showing ${count} ${button.textContent.toLowerCase()}.`;
}));

// Activates real WhatsApp links only after a number has been configured.
const whatsappReady = /^[1-9]\d{7,14}$/.test(WHATSAPP_NUMBER);
document.querySelectorAll('[data-whatsapp]').forEach(link => {
  if (whatsappReady) {
    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', 'Chat on WhatsApp (opens a new tab)');
  } else {
    link.addEventListener('click', () => {
      document.querySelector('#demo-contact').textContent = 'This is a portfolio demo. To enable WhatsApp, add your business number in script.js.';
    });
  }
});
if (whatsappReady) document.querySelector('#demo-contact').textContent = 'Opens WhatsApp so you can send us a message.';
document.querySelector('#year').textContent = new Date().getFullYear();
