/* ===== DATA ===== */
const roomsData = [
  {
    id: 'room-101',
    number: '101',
    name: 'Valley View Family Room',
    tagline: 'Spacious first-floor room with valley and sunrise views',
    description: 'A large family room on the first floor with warm wooden interiors, multiple beds, and windows opening to Little Valley and sunrise views. Ideal for families or groups seeking comfort and togetherness in the heart of the mountains.',
    amenities: ['Valley View', 'Sunrise View', '1st Floor', 'Attached Bath', 'Hot Water', 'Extra Blankets', 'Room Heater', 'Wi-Fi'],
    price: 7200,
    priceNote: 'per night · includes breakfast',
    capacity: 6,
    images: [
      { src: 'images/Room-101/IMG_5469.png', alt: 'Room 101 — spacious bedroom with multiple beds and wooden interiors' },
      { src: 'images/Room-101/IMG_5468.png', alt: 'Room 101 — view from the room' },
      { src: 'images/Room-101/IMG_5467.png', alt: 'Room 101 — attached bathroom' }
    ]
  },
  {
    id: 'room-102',
    number: '102',
    name: 'Ridge View Room',
    tagline: 'Panoramic views of the Singalila Ridge',
    description: 'A spacious mountain room overlooking the rolling ridgeline. Warm wooden interiors with large windows that invite the morning light and mist. Perfect for watching the cloud sea drift through the valley.',
    amenities: ['Ridge View', 'Attached Bath', 'Hot Water', 'Extra Blankets', 'Room Heater', 'Wi-Fi'],
    price: 1200,
    priceNote: 'per night · includes breakfast',
    capacity: 2,
    images: [
      { src: 'images/Room-102/IMG_5471.jpeg', alt: 'Room 102 — spacious interior with ridge view' },
      { src: 'images/Room-102/IMG_5474.png', alt: 'Room 102 — warm wooden interiors and natural light' },
      { src: 'images/Room-102/IMG_5473.png', alt: 'Room 102 — window overlooking the Singalila Ridge' }
    ]
  },
  {
    id: 'room-103',
    number: '103',
    name: 'Kanchenjunga View Room',
    tagline: 'Wake up to the world\'s third-highest peak',
    description: 'A cosy mountain room with a breathtaking window framing Kanchenjunga and the Singalila Ridge. Warm wooden interiors, thick blankets, and the sound of wind through prayer flags.',
    amenities: ['Mountain View', 'Attached Bath', 'Hot Water', 'Extra Blankets', 'Room Heater', 'Wi-Fi'],
    price: 1500,
    priceNote: 'per night · includes breakfast',
    capacity: 2,
    images: [
      { src: 'images/Room-103/IMG_5464.jpeg', alt: 'Room 103 — cosy interior with mountain view' },
      { src: 'images/Room-103/IMG_5465.jpeg', alt: 'Room 103 — warm bedding and wooden walls' },
      { src: 'images/Room-103/IMG_5466.jpeg', alt: 'Room 103 — window overlooking the Singalila Ridge' }
    ]
  }
];

const experiencesData = [
  { icon: '🌄', title: 'Sunrise at Tumling', description: 'Watch Kanchenjunga blush gold as first light breaks over the Himalayas. The horizon stretches from Nepal to Sikkim in a single breathtaking sweep.' },
  { icon: '🥾', title: 'Singalila Ridge Trek', description: 'Set off on the legendary trail through rhododendron forests, past Buddhist monasteries, along ancient trade routes linking India and Nepal.' },
  { icon: '🌨️', title: 'Himalayan Winter Snow', description: 'When snow silences Tumling, prayer flags stand vivid against grey skies. A rare, otherworldly stillness unlike anywhere else on earth.' },
  { icon: '🍲', title: 'Home-Cooked Meals', description: 'Thukpa, momos, dal bhat — made with local ingredients and generations of knowledge. Fireside dining with mist rolling past the windows.' },
  { icon: '🌕', title: 'Moonlit Nights', description: 'The Milky Way arcs overhead; a full moon bathes the valleys in silver. Zero light pollution. Just stars, the ridge, and absolute quiet.' },
  { icon: '🏯', title: 'Living Culture', description: 'Learn the stories of the Lepcha and Nepali communities who have called these ridges home for centuries. Festivals, crafts, and shared memory.' }
];

const menuData = [
  {
    category: 'Breakfast',
    heading: 'Morning Bites',
    items: [
      { name: 'Thukpa Noodle Soup', price: '₹120' },
      { name: 'Tibetan Bread & Butter', price: '₹80' },
      { name: 'Egg Fried Rice', price: '₹100' },
      { name: 'Aloo Paratha Set', price: '₹90' },
      { name: 'Masala Chai', price: '₹20' }
    ]
  },
  {
    category: 'Lunch & Dinner',
    heading: 'Hearty Meals',
    items: [
      { name: 'Dal Bhat Tarkari', price: '₹150' },
      { name: 'Steamed Momos (8\u00a0pcs)', price: '₹100' },
      { name: 'Fried Momos (8\u00a0pcs)', price: '₹120' },
      { name: 'Veg Noodles', price: '₹100' },
      { name: 'Chicken Curry + Rice', price: '₹180' }
    ]
  },
  {
    category: 'Drinks & Snacks',
    heading: 'Warm & Refreshing',
    items: [
      { name: 'Ginger Lemon Tea', price: '₹30' },
      { name: 'Hot Chocolate', price: '₹60' },
      { name: 'Tongba (Millet Beer)', price: '₹80' },
      { name: 'Churpi Snack', price: '₹40' },
      { name: 'Sel Roti', price: '₹50' }
    ]
  }
];

const galleryData = [
  { src: 'images/IMG_5457.jpeg', alt: 'Panoramic winter snowscape over Tumling ridge' },
  { src: 'images/IMG_5455.jpeg', alt: 'Snow-covered hills with cloud sea' },
  { src: 'images/IMG_5453.jpeg', alt: 'Prayer flags in deep snow' },
  { src: 'images/IMG_5456.jpeg', alt: 'Cloud river filling the valley' },
  { src: 'images/IMG_5454.jpeg', alt: 'Winding mountain road in snow' },
  { src: 'images/IMG_2492.jpeg', alt: 'Sunset over the ridge with prayer flags' },
  { src: 'images/IMG_2491.jpeg', alt: 'Sunrise above silhouetted Himalayan peaks' },
  { src: 'images/IMG_2494.jpeg', alt: 'Homestay lit under a full moon' },
];

const reviewsData = {
  rating: 4.6,
  totalReviews: 91,
  googleReviewUrl: 'https://www.google.com/travel/search?q=hotel%20green%20hill%20paradise%20tumling&g2lb=4965990%2C72471280%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C72958624%2C73059275%2C73064764%2C121529350&hl=en-US&gl=us&cs=1&ssta=1&ts=CAEaSQopEicyJTB4MzllNWQxNjBmZmNhZWFkOToweDZmMzJjNGI5ZDk3ZDJiNzQSHBIUCgcI6g8QAxgOEgcI6g8QAxgPGAEyBAgAEAA&qs=CAEyJ0Noa0k5TmIweTUyWHNabHZHZzB2Wnk4eE1XaG1iblI2WTE5dEVBRTgCQgkJdCt92bnEMm9CCQl0K33ZucQybw&ap=KigKEgknJLcjRwc7QBEfu4sROQRWQBISCcfF9I2_CDtAER-7ixZwBFZAugEHcmV2aWV3cw&ictx=111',
  reviews: [
    {
      name: 'Amitava Goswami',
      rating: 5,
      date: '4 months ago',
      type: 'Vacation | Family',
      text: 'Green Hill Paradise in Tumling is truly one of the best hotels in the area. The location is absolutely perfect \u2014 you can enjoy a breathtaking view of Kanchenjunga right from the front of the hotel, both at sunrise and sunset. The hospitality of the staff is exceptional. They are warm, polite, and always ready to help. The rooms are clean, cozy, and well-maintained.',
      screenshot: 'images/reviews/Screenshot 2026-03-02 160400.png'
    },
    {
      name: 'Samten Bhutia',
      rating: 5,
      date: '4 months ago',
      type: 'Vacation | Friends',
      text: 'Trekked from Manebhanjang on 12th October. Rooms were cozy, spacious. Had enough outlets and we were provided ample blankets. Hygienic and well maintained throughout. Staff were extremely friendly as well. Well worth it for the price range.',
      screenshot: 'images/reviews/Screenshot 2026-03-02 160454.png'
    },
    {
      name: 'Ushmita Paul',
      rating: 5,
      date: '2 months ago',
      type: 'Vacation | Friends',
      text: 'Highly recommend, best in food as well as services. We stayed for 3 days and 2 nights and it was seriously an incredible stay. They used to provide hot water whenever needed and their food feels so homely. I would suggest everyone to stay at this place.',
      screenshot: 'images/reviews/Screenshot 2026-03-02 160613.png'
    },
    {
      name: 'Aniket Nandi',
      rating: 5,
      date: '2 months ago',
      type: 'Vacation | Friends',
      text: 'Very good food and service. Terrific view of the Sleeping Buddha. Highly recommended.',
      screenshot: 'images/reviews/Screenshot 2026-03-02 160637.png'
    },
    {
      name: 'Malay Barui',
      rating: 4,
      date: '2 months ago',
      type: 'Vacation | Family',
      text: 'The hotel is located in an awesome place, surrounded by calm and natural beauty, allowing anyone who visits to truly experience real nature in a peaceful and refreshing way. Very delicious and good quality meals.',
      screenshot: 'images/reviews/Screenshot 2026-03-02 160659.png'
    },
    {
      name: 'Surya Prakash Rana',
      rating: 5,
      date: '6 months ago',
      type: 'Vacation',
      text: 'Green Hill Paradise Hotel is at a great location, clean and spacious rooms. We met some amazing travellers and made friends.',
      screenshot: 'images/reviews/Screenshot 2026-03-02 160724.png'
    }
  ]
};

/* ===== NAV ===== */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => { nav.classList.toggle('stuck', window.scrollY > 60); }, { passive: true });

// Mobile menu
const hamburger = document.getElementById('navHamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('open');
  hamburger.setAttribute('aria-expanded', 'true');
  mobileClose.focus();
});
mobileClose.addEventListener('click', closeMobileMenu);
function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.focus();
}

/* ===== RENDER FUNCTIONS ===== */
function renderExperiences() {
  const grid = document.getElementById('expGrid');
  if (!grid) return;
  grid.innerHTML = experiencesData.map(exp => `
    <article class="exp-card" role="listitem">
      <div class="exp-icon-wrap" aria-hidden="true">${exp.icon}</div>
      <h3>${exp.title}</h3>
      <p>${exp.description}</p>
    </article>
  `).join('');
}

function renderMenu() {
  const grid = document.getElementById('menuGrid');
  if (!grid) return;
  grid.innerHTML = menuData.map(cat => `
    <div class="menu-card">
      <p class="menu-cat">${cat.category}</p>
      <h3>${cat.heading}</h3>
      <ul class="menu-list" aria-label="${cat.category} menu items">
        ${cat.items.map(item => `<li><span>${item.name}</span><span class="menu-price">${item.price}</span></li>`).join('')}
      </ul>
    </div>
  `).join('');
}

function renderRooms() {
  const grid = document.getElementById('roomsGrid');
  if (!grid) return;
  grid.innerHTML = roomsData.map((room, idx) => `
    <div class="room-card reveal" style="--stagger-delay:${idx * 120}ms" onclick="openRoomModal('${room.id}')" tabindex="0" role="button" aria-label="View details for ${room.name}" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openRoomModal('${room.id}')}">
      <div class="room-card-img">
        <img src="${room.images[0].src}" alt="${room.images[0].alt}" width="600" height="400" loading="lazy" />
        <span class="room-card-badge">Room ${room.number}</span>
      </div>
      <div class="room-card-body">
        <h3 class="room-card-name">${room.name}</h3>
        <p class="room-card-tagline">${room.tagline}</p>
        <div class="room-card-footer">
          <span class="room-card-price">₹${room.price.toLocaleString('en-IN')}<small>/night</small></span>
          <span class="room-card-cta">View Room →</span>
        </div>
      </div>
    </div>
  `).join('');

  // Staggered entrance observer for room cards
  const roomCards = grid.querySelectorAll('.room-card.reveal');
  const roomObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.style.transitionDelay = entry.target.style.getPropertyValue('--stagger-delay');
      entry.target.classList.add('visible');
      roomObs.unobserve(entry.target);
    });
  }, { threshold: 0.1 });
  roomCards.forEach(card => roomObs.observe(card));
}

function renderRoomPreferenceOptions() {
  const sel = document.getElementById('roomPref');
  if (!sel) return;
  roomsData.forEach(room => {
    const opt = document.createElement('option');
    opt.value = room.id;
    opt.textContent = `Room ${room.number} — ${room.name}`;
    sel.appendChild(opt);
  });
}

function renderReviews() {
  const grid = document.getElementById('reviewsGrid');
  if (!grid) return;
  grid.innerHTML = reviewsData.reviews.map(rev => `
    <article class="review-card">
      <img src="${rev.screenshot}" alt="Google review by ${rev.name}" class="review-screenshot" loading="lazy" />
    </article>
  `).join('');

  // Fill in aggregate
  const badge = document.getElementById('reviewsBadge');
  if (badge) {
    badge.querySelector('.reviews-rating-num').textContent = reviewsData.rating;
    badge.querySelector('.reviews-count').textContent = reviewsData.totalReviews + ' reviews on Google';
  }
}

/* ===== INIT RENDERS ===== */
renderExperiences();
renderMenu();
renderRooms();
renderRoomPreferenceOptions();
renderReviews();

/* ===== BUDGET FILTER ===== */
const budgetRange = document.getElementById('budgetRange');
const budgetValue = document.getElementById('budgetValue');
if (budgetRange && budgetValue) {
  budgetRange.addEventListener('input', () => {
    const max = parseInt(budgetRange.value);
    budgetValue.textContent = 'Up to \u20B9' + max.toLocaleString('en-IN') + '/night';
    document.querySelectorAll('.room-card').forEach(card => {
      const roomId = card.getAttribute('onclick')?.match(/'(room-\d+)'/)?.[1];
      const room = roomsData.find(r => r.id === roomId);
      if (room) {
        card.classList.toggle('budget-hidden', room.price > max);
      }
    });
  });
}

/* ===== GLOBAL ESCAPE ===== */
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  if (mobileMenu.classList.contains('open')) closeMobileMenu();
  if (document.getElementById('lightbox').classList.contains('open')) closeLb();
  if (document.getElementById('roomModal').classList.contains('open')) closeRoomModal();
});

/* ===== HERO SLIDESHOW ===== */
const slides = document.querySelectorAll('.hero-reel-slide');
const dots = document.querySelectorAll('.hero-dot');
let cur = 0, timer;
function goTo(i) {
  slides[cur].classList.remove('on'); dots[cur].classList.remove('on'); dots[cur].setAttribute('aria-selected','false');
  cur = (i + slides.length) % slides.length;
  slides[cur].classList.add('on'); dots[cur].classList.add('on'); dots[cur].setAttribute('aria-selected','true');
}
dots.forEach((dot, i) => dot.addEventListener('click', () => { clearInterval(timer); goTo(i); startTimer(); }));
dots.forEach((dot, i) => dot.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') { clearInterval(timer); goTo(i+1); startTimer(); }
  if (e.key === 'ArrowLeft')  { clearInterval(timer); goTo(i-1); startTimer(); }
}));
function startTimer() { timer = setInterval(() => goTo(cur + 1), 5500); }
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) startTimer();

/* ===== SCROLL REVEAL ===== */
const reveals = document.querySelectorAll('.reveal:not(.room-card)');
const obs = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (!entry.isIntersecting) return;
    entry.target.style.transitionDelay = (i % 3) * 80 + 'ms';
    entry.target.classList.add('visible');
    obs.unobserve(entry.target);
  });
}, { threshold: 0.1 });
reveals.forEach(el => obs.observe(el));

/* ===== LIGHTBOX ===== */
let lbCur = 0;
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
function openLb(i) {
  lbCur = i; lbImg.src = galleryData[i].src; lbImg.alt = galleryData[i].alt;
  lb.classList.add('open'); lb.removeAttribute('aria-hidden');
  document.getElementById('lbClose').focus();
  document.body.style.overflow = 'hidden';
}
function closeLb() {
  lb.classList.remove('open'); lb.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}
document.getElementById('lbClose').addEventListener('click', closeLb);
lb.addEventListener('click', (e) => { if (e.target === lb) closeLb(); });
document.getElementById('lbPrev').addEventListener('click', (e) => {
  e.stopPropagation(); lbCur = (lbCur - 1 + galleryData.length) % galleryData.length;
  lbImg.src = galleryData[lbCur].src; lbImg.alt = galleryData[lbCur].alt;
});
document.getElementById('lbNext').addEventListener('click', (e) => {
  e.stopPropagation(); lbCur = (lbCur + 1) % galleryData.length;
  lbImg.src = galleryData[lbCur].src; lbImg.alt = galleryData[lbCur].alt;
});
document.addEventListener('keydown', (e) => {
  if (!lb.classList.contains('open')) return;
  if (e.key === 'ArrowLeft')  document.getElementById('lbPrev').click();
  if (e.key === 'ArrowRight') document.getElementById('lbNext').click();
});

/* ===== ROOM MODAL ===== */
const roomModal = document.getElementById('roomModal');
const roomModalInner = roomModal.querySelector('.room-modal-inner');
let roomCarouselIdx = 0;
let activeRoomImages = [];

function openRoomModal(roomId) {
  const room = roomsData.find(r => r.id === roomId);
  if (!room) return;
  activeRoomImages = room.images;
  roomCarouselIdx = 0;

  // Populate modal
  roomModal.querySelector('.rm-room-number').textContent = 'Room ' + room.number;
  roomModal.querySelector('.rm-name').textContent = room.name;
  roomModal.querySelector('.rm-tagline').textContent = room.tagline;
  roomModal.querySelector('.rm-description').textContent = room.description;
  roomModal.querySelector('.rm-price').innerHTML = '₹' + room.price.toLocaleString('en-IN') + '<small>/' + room.priceNote + '</small>';
  roomModal.querySelector('.rm-capacity').textContent = room.capacity + ' Guests';

  // Amenities
  const amenList = roomModal.querySelector('.rm-amenities');
  amenList.innerHTML = room.amenities.map(a => '<li>' + a + '</li>').join('');

  // Carousel
  const track = roomModal.querySelector('.rm-carousel-track');
  track.innerHTML = room.images.map(img => '<div class="rm-slide"><img src="' + img.src + '" alt="' + img.alt + '" /></div>').join('');
  const dotsWrap = roomModal.querySelector('.rm-carousel-dots');
  dotsWrap.innerHTML = room.images.map((_, i) => '<button class="rm-dot' + (i === 0 ? ' on' : '') + '" data-idx="' + i + '" aria-label="Slide ' + (i + 1) + '"></button>').join('');
  updateRoomCarousel();

  // Book button data
  roomModal.querySelector('.rm-book-btn').dataset.roomId = room.id;

  roomModal.classList.add('open');
  roomModal.removeAttribute('aria-hidden');
  document.body.style.overflow = 'hidden';
  roomModal.querySelector('.rm-close').focus();
}

function closeRoomModal() {
  roomModal.classList.remove('open');
  roomModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function updateRoomCarousel() {
  const track = roomModal.querySelector('.rm-carousel-track');
  track.style.transform = 'translateX(-' + (roomCarouselIdx * 100) + '%)';
  const allDots = roomModal.querySelectorAll('.rm-dot');
  allDots.forEach((d, i) => d.classList.toggle('on', i === roomCarouselIdx));
}

function roomCarouselNav(dir) {
  roomCarouselIdx = (roomCarouselIdx + dir + activeRoomImages.length) % activeRoomImages.length;
  updateRoomCarousel();
}

// Modal event listeners
roomModal.addEventListener('click', (e) => {
  if (e.target === roomModal) closeRoomModal();
});
roomModal.querySelector('.rm-close').addEventListener('click', closeRoomModal);
roomModal.querySelector('.rm-prev').addEventListener('click', () => roomCarouselNav(-1));
roomModal.querySelector('.rm-next').addEventListener('click', () => roomCarouselNav(1));
roomModal.querySelector('.rm-carousel-dots').addEventListener('click', (e) => {
  const dot = e.target.closest('.rm-dot');
  if (!dot) return;
  roomCarouselIdx = parseInt(dot.dataset.idx);
  updateRoomCarousel();
});
roomModal.querySelector('.rm-book-btn').addEventListener('click', () => {
  const roomId = roomModal.querySelector('.rm-book-btn').dataset.roomId;
  closeRoomModal();
  const sel = document.getElementById('roomPref');
  if (sel) { sel.value = roomId; sel.style.color = '#fff'; }
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

// Arrow keys in room modal
document.addEventListener('keydown', (e) => {
  if (!roomModal.classList.contains('open')) return;
  if (e.key === 'ArrowLeft') roomCarouselNav(-1);
  if (e.key === 'ArrowRight') roomCarouselNav(1);
});

/* ===== ANIMATED STAT COUNTER ===== */
const statCounters = document.querySelectorAll('[data-target]');
const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.dataset.target);
    const duration = 1600;
    const start = performance.now();
    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      el.textContent = Math.round(target * eased);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    counterObs.unobserve(el);
  });
}, { threshold: 0.5 });
statCounters.forEach(el => counterObs.observe(el));

/* ===== FORM ===== */
const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const toast = document.getElementById('toast');
const availabilityNotice = document.getElementById('availabilityNotice');
const bookingConfirmation = document.getElementById('bookingConfirmation');

function showToast(msg, isError) {
  toast.textContent = msg;
  toast.classList.toggle('error', !!isError);
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4500);
}

function validateField(input) {
  const wrap = input.closest('.field');
  if (!input.required) return true;
  const valid = input.value.trim() !== '' && input.checkValidity();
  wrap.classList.toggle('has-error', !valid);
  return valid;
}

['guestName','guestEmail'].forEach(id => {
  const el = document.getElementById(id);
  el.addEventListener('blur', () => validateField(el));
  el.addEventListener('input', () => { if (el.closest('.field').classList.contains('has-error')) validateField(el); });
});

document.getElementById('guests').addEventListener('change', function() { this.style.color = '#fff'; });
document.getElementById('roomPref').addEventListener('change', function() { this.style.color = '#fff'; });

/* ===== AVAILABILITY CHECKING ===== */
let availabilityTimeout;
function checkAvailability() {
  clearTimeout(availabilityTimeout);
  const checkin = document.getElementById('checkin').value;
  const checkout = document.getElementById('checkout').value;
  const roomId = document.getElementById('roomPref').value;

  if (!checkin || !checkout || !roomId) {
    availabilityNotice.style.display = 'none';
    submitBtn.disabled = false;
    return;
  }

  availabilityNotice.style.display = 'block';
  availabilityNotice.className = 'availability-notice checking';
  availabilityNotice.textContent = 'Checking availability\u2026';

  availabilityTimeout = setTimeout(async () => {
    try {
      const res = await fetch('/api/availability?checkin=' + encodeURIComponent(checkin) + '&checkout=' + encodeURIComponent(checkout) + '&roomId=' + encodeURIComponent(roomId));
      if (!res.ok) throw new Error('API error');
      const data = await res.json();
      const isAvailable = data[roomId];

      if (isAvailable) {
        availabilityNotice.className = 'availability-notice available';
        availabilityNotice.textContent = '\u2713 Room is available for your selected dates!';
        submitBtn.disabled = false;
      } else {
        availabilityNotice.className = 'availability-notice unavailable';
        availabilityNotice.textContent = '\u2717 Room is not available for these dates. Please try different dates or another room.';
        submitBtn.disabled = true;
      }
    } catch {
      // If API is not available (local dev), allow submission
      availabilityNotice.style.display = 'none';
      submitBtn.disabled = false;
    }
  }, 400);
}

['checkin', 'checkout'].forEach(id => {
  document.getElementById(id).addEventListener('change', checkAvailability);
});
document.getElementById('roomPref').addEventListener('change', function() {
  this.style.color = '#fff';
  checkAvailability();
});

/* ===== FORM SUBMISSION ===== */
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const nameOk  = validateField(document.getElementById('guestName'));
  const emailOk = validateField(document.getElementById('guestEmail'));
  if (!nameOk || !emailOk) {
    const first = form.querySelector('.field.has-error input');
    if (first) first.focus();
    return;
  }

  const formData = {
    name: document.getElementById('guestName').value.trim(),
    email: document.getElementById('guestEmail').value.trim(),
    checkin: document.getElementById('checkin').value,
    checkout: document.getElementById('checkout').value,
    guests: document.getElementById('guests').value,
    roomId: document.getElementById('roomPref').value,
    message: document.getElementById('message').value.trim(),
  };

  submitBtn.disabled = true;
  submitBtn.classList.add('loading');

  try {
    const res = await fetch('/api/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.status === 409) {
      submitBtn.disabled = false;
      submitBtn.classList.remove('loading');
      showToast('Room is no longer available for these dates. Please choose different dates.', true);
      return;
    }

    if (!res.ok) throw new Error('Booking failed');

    // Success — show confirmation
    form.style.display = 'none';
    bookingConfirmation.style.display = 'block';

    const roomName = roomsData.find(r => r.id === formData.roomId)?.name || formData.roomId;
    document.getElementById('confirmationText').textContent =
      'Your stay at ' + roomName + ' from ' + formData.checkin + ' to ' + formData.checkout + ' is confirmed. We look forward to welcoming you!';

    // Set WhatsApp follow-up link
    const waMsg = 'Hi! I just booked ' + roomName + ' from ' + formData.checkin + ' to ' + formData.checkout + '. My name is ' + formData.name + '.';
    document.getElementById('whatsappFollowup').href = 'https://wa.me/9779818904958?text=' + encodeURIComponent(waMsg);

  } catch {
    // Fallback for local dev or API failure
    submitBtn.disabled = false;
    submitBtn.classList.remove('loading');
    form.reset();
    document.getElementById('guests').style.color = '';
    document.getElementById('roomPref').style.color = '';
    availabilityNotice.style.display = 'none';
    showToast('\u2713 Enquiry sent \u2014 we\u2019ll be in touch within 24 hours.');
  }
});

/* ===== NEW BOOKING BUTTON ===== */
document.getElementById('newBookingBtn').addEventListener('click', () => {
  bookingConfirmation.style.display = 'none';
  form.style.display = '';
  form.reset();
  submitBtn.disabled = false;
  submitBtn.classList.remove('loading');
  document.getElementById('guests').style.color = '';
  document.getElementById('roomPref').style.color = '';
  availabilityNotice.style.display = 'none';
});
