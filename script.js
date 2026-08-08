/* ============================================
   CHINO'S AUTO REPAIR & MECHANIC SHOP
   Site interactivity
   ============================================ */

document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- Mobile nav toggle ---------- */
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

/* ---------- Service menu board (accordion) ---------- */
document.querySelectorAll('.menu-dept-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const dept = btn.closest('.menu-dept');
    const panel = dept.querySelector('.menu-dept-panel');
    const isOpen = dept.classList.contains('open');

    // Close all other departments (one open at a time, like flipping a menu board page)
    document.querySelectorAll('.menu-dept.open').forEach(openDept => {
      if (openDept !== dept) {
        openDept.classList.remove('open');
        openDept.querySelector('.menu-dept-panel').style.maxHeight = null;
        openDept.querySelector('.menu-dept-toggle').setAttribute('aria-expanded', 'false');
      }
    });

    if (isOpen) {
      dept.classList.remove('open');
      panel.style.maxHeight = null;
      btn.setAttribute('aria-expanded', 'false');
    } else {
      dept.classList.add('open');
      panel.style.maxHeight = panel.scrollHeight + 'px';
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

/* ---------- Reviews ---------- */
// Starter organic reviews. To permanently add a review for all visitors,
// add a new object to this array and redeploy the site.
const starterReviews = [
  {
    name: "Marcus T.",
    rating: 5,
    text: "My check engine light had been on for weeks and two other shops quoted me almost $900. Chino found the real problem, fixed it same day, and it came in under $300. He explained everything in a way I actually understood. This is my shop now.",
    date: "June 2026"
  },
  {
    name: "Denise W.",
    rating: 5,
    text: "Got a flat on Route 13 at 11pm with my kids in the car. Called Chino's towing and they had someone out to us in under 30 minutes. Then they fixed the tire the next morning before I had to be at work. I don't know what we would've done otherwise.",
    date: "March 2026"
  },
  {
    name: "Robert H.",
    rating: 5,
    text: "Had a decent size dent and some scraped paint on my truck door. I braced myself for a big bill but Chino worked with my budget and it looks brand new. You genuinely cannot tell it was ever damaged. Great work, fair price.",
    date: "May 2026"
  },
  {
    name: "Angela P.",
    rating: 4,
    text: "Needed 2 new tires and an alignment before a trip. They got me in the same week, price was fair, and my car drives so much smoother now. Only reason it's not 5 stars is I had to wait a little longer than expected, but they were upfront about it.",
    date: "April 2026"
  },
  {
    name: "Kevin S.",
    rating: 5,
    text: "As someone who knows nothing about cars, I've been ripped off before. Chino actually showed me the worn part he pulled out of my car and explained why it needed replacing. Nobody has ever done that for me. Honest people.",
    date: "February 2026"
  },
  {
    name: "Tanya R.",
    rating: 5,
    text: "Single mom, tight budget, transmission was slipping. Chino gave it to me straight, no upselling, fixed exactly what needed fixing. My car has been running great for months now. Prices are fair for people like me who work hard for every dollar.",
    date: "January 2026"
  }
];

const REVIEW_STORAGE_KEY = 'chinos_local_reviews';

function getLocalReviews() {
  try {
    return JSON.parse(localStorage.getItem(REVIEW_STORAGE_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveLocalReview(review) {
  const reviews = getLocalReviews();
  reviews.unshift(review);
  localStorage.setItem(REVIEW_STORAGE_KEY, JSON.stringify(reviews));
}

function starString(n) {
  return '★'.repeat(n) + '☆'.repeat(5 - n);
}

function renderReviews() {
  const grid = document.getElementById('reviewsGrid');
  const countEl = document.getElementById('reviewsCount');
  const all = [...getLocalReviews(), ...starterReviews];

  grid.innerHTML = all.map(r => `
    <div class="review-card">
      <div class="review-stars">${starString(r.rating)}</div>
      <p class="review-text">"${escapeHtml(r.text)}"</p>
      <div class="review-meta">
        <span>${escapeHtml(r.name)}</span>
        <span>${escapeHtml(r.date)}</span>
      </div>
    </div>
  `).join('');

  countEl.textContent = `based on ${all.length} reviews`;
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

renderReviews();

const reviewForm = document.getElementById('reviewForm');
reviewForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('revName').value.trim();
  const rating = parseInt(document.getElementById('revRating').value, 10);
  const text = document.getElementById('revText').value.trim();

  if (!name || !text) return;

  saveLocalReview({
    name,
    rating,
    text,
    date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  });

  reviewForm.reset();
  renderReviews();

  const grid = document.getElementById('reviewsGrid');
  grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
