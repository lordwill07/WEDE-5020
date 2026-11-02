document.addEventListener('DOMContentLoaded', function () {

  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', function () {
      const item = this.parentElement;
      const content = item.querySelector('.accordion-content');
      
      document.querySelectorAll('.accordion-item').forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherContent = otherItem.querySelector('.accordion-content');
          if (otherContent) otherContent.style.display = 'none';
        }
      });

      item.classList.toggle('active');
      if (content) {
        if (item.classList.contains('active')) {
          content.style.display = 'block';
        } else {
          content.style.display = 'none';
        }
      }
    });
  });

  const searchInput = document.getElementById('program-search');
  const filterButtons = document.querySelectorAll('[data-filter]');
  const programCards = document.querySelectorAll('.program-card');

  function filterPrograms() {
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const activeFilter = document.querySelector('[data-filter].active');
    const filterValue = activeFilter ? activeFilter.getAttribute('data-filter') : 'all';

    programCards.forEach(card => {
      const category = card.getAttribute('data-category') || '';
      const title = card.textContent.toLowerCase();
      
      const matchesSearch = title.includes(searchTerm);
      const matchesFilter = filterValue === 'all' || category === filterValue;

      if (matchesSearch && matchesFilter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', filterPrograms);
  }

  if (filterButtons) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        filterButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        filterPrograms();
      });
    });
  }

  const galleryImages = document.querySelectorAll('.gallery img, [data-lightbox]');
  let currentImageIndex = 0;

  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  lightbox.style.cssText = 'display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.9); z-index:9999; justify-content:center; align-items:center; flex-direction:column;';
  lightbox.innerHTML = `
    <span id="lightbox-close" style="position:absolute; top:20px; right:30px; color:white; font-size:40px; cursor:pointer;">&times;</span>
    <span id="lightbox-prev" style="position:absolute; left:20px; top:50%; color:white; font-size:40px; cursor:pointer;">&#10094;</span>
    <img id="lightbox-img" style="max-width:90%; max-height:80%; border-radius:8px;">
    <span id="lightbox-next" style="position:absolute; right:20px; top:50%; color:white; font-size:40px; cursor:pointer;">&#10095;</span>
    <p id="lightbox-caption" style="color:white; margin-top:15px;"></p>
  `;
  document.body.appendChild(lightbox);

  function openLightbox(index) {
    currentImageIndex = index;
    const img = galleryImages[index];
    document.getElementById('lightbox-img').src = img.src;
    document.getElementById('lightbox-caption').textContent = img.alt || '';
    lightbox.style.display = 'flex';
  }

  galleryImages.forEach((img, index) => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => openLightbox(index));
  });

  document.getElementById('lightbox-close').addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  document.getElementById('lightbox-prev').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    openLightbox(currentImageIndex);
  });

  document.getElementById('lightbox-next').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    openLightbox(currentImageIndex);
  });

  document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'flex') {
      if (e.key === 'Escape') lightbox.style.display = 'none';
      if (e.key === 'ArrowLeft') document.getElementById('lightbox-prev').click();
      if (e.key === 'ArrowRight') document.getElementById('lightbox-next').click();
    }
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.style.display = 'none';
  });

  const enquiryForm = document.getElementById('enquiry-form');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', function (e) {
      e.preventDefault();
      
      if (!this.checkValidity()) {
        this.reportValidity();
        return;
      }

      const service = document.getElementById('enquiry-service').value;
      const duration = document.getElementById('enquiry-duration').value;
      const email = document.getElementById('enquiry-email').value;
      const feedback = this.querySelector('[data-form-feedback]');

      let cost = 'R300';
      if (service === 'Computer skills') cost = 'R500';
      if (service === 'Academic support') cost = 'R300';
      if (service === 'Mentorship') cost = 'Free';
      if (service === 'Sports coaching') cost = 'R200';
      
      let availability = 'Spaces available next week.';
      if (service === 'Sports coaching') {
        availability = 'Fully booked until December.';
      }

      feedback.style.display = 'block';
      feedback.style.background = '#e6f4ea';
      feedback.style.padding = '12px';
      feedback.style.borderRadius = '8px';
      feedback.innerHTML = `
        Thank you!<br>
        Service: <strong>${service}</strong><br>
        Duration: ${duration}<br>
        Estimated Cost: <strong>${cost}</strong><br>
        Availability: <strong>${availability}</strong> We will email you at ${email}.
      `;

      feedback.scrollIntoView({ behavior: 'smooth' });
    });
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!this.checkValidity()) {
        this.reportValidity();
        return;
      }

      const name = document.getElementById('contact-name').value;
      const email = document.getElementById('contact-email').value;
      const feedback = this.querySelector('[data-form-feedback]');

      feedback.style.display = 'block';
      feedback.style.background = '#e6f4ea';
      feedback.style.padding = '12px';
      feedback.style.borderRadius = '8px';
      feedback.innerHTML = `
        Thank you, ${name}!<br>
        <strong>Message sent successfully!</strong><br>
        We will reply to <strong>${email}</strong> within 24 hours.
      `;

      this.reset();
      feedback.scrollIntoView({ behavior: 'smooth' });
    });
  }

  const volunteerForm = document.getElementById('volunteer-form');
  if (volunteerForm) {
    volunteerForm.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!this.checkValidity()) {
        this.reportValidity();
        return;
      }

      const name = document.getElementById('volunteer-name') ? document.getElementById('volunteer-name').value : 'Volunteer';
      const email = document.getElementById('volunteer-email') ? document.getElementById('volunteer-email').value : '';
      const feedback = this.querySelector('[data-form-feedback]');

      feedback.style.display = 'block';
      feedback.style.background = '#e6f4ea';
      feedback.style.borderLeft = '4px solid #34a853';
      feedback.style.padding = '12px';
      feedback.style.borderRadius = '8px';
      feedback.innerHTML = `
        Thank you, ${name}!<br>
        <strong>Volunteer application sent!</strong><br>
        We have received your details and will contact you at <strong>${email}</strong> to schedule orientation.<br>
        Availability: <strong>Volunteer training starts next Monday.</strong>
      `;

      this.reset();
      feedback.scrollIntoView({ behavior: 'smooth' });
    });
  }

});