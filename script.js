document.addEventListener('DOMContentLoaded', function () {

  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.setAttribute('role', 'button');
    header.setAttribute('aria-expanded', 'false');
    header.setAttribute('tabindex', '0');
    
    function toggleAccordion() {
      const item = this.parentElement;
      const content = item.querySelector('.accordion-content');
      
      document.querySelectorAll('.accordion-item').forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
          const otherContent = otherItem.querySelector('.accordion-content');
          if (otherContent) otherContent.style.display = 'none';
        }
      });

      const isActive = item.classList.toggle('active');
      this.setAttribute('aria-expanded', isActive.toString());
      if (content) {
        content.style.display = isActive ? 'block' : 'none';
      }
    }

    header.addEventListener('click', toggleAccordion);
    header.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleAccordion.call(this);
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
      const title = (card.getAttribute('data-title') || card.textContent).toLowerCase();
      
      const matchesSearch = title.includes(searchTerm);
      const matchesFilter = filterValue === 'all' || category === filterValue;

      card.style.display = (matchesSearch && matchesFilter) ? 'block' : 'none';
    });
  }

  if (searchInput) searchInput.addEventListener('input', filterPrograms);
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

  if (galleryImages.length > 0) {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-label', 'Image gallery');
    lightbox.style.cssText = 'display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.9); z-index:9999; justify-content:center; align-items:center; flex-direction:column;';
    lightbox.innerHTML = `
      <span id="lightbox-close" role="button" tabindex="0" aria-label="Close" style="position:absolute; top:20px; right:30px; color:white; font-size:40px; cursor:pointer;">&times;</span>
      <span id="lightbox-prev" role="button" tabindex="0" aria-label="Previous" style="position:absolute; left:20px; top:50%; color:white; font-size:40px; cursor:pointer;">&#10094;</span>
      <img id="lightbox-img" style="max-width:90%; max-height:80%; border-radius:8px;" alt="">
      <span id="lightbox-next" role="button" tabindex="0" aria-label="Next" style="position:absolute; right:20px; top:50%; color:white; font-size:40px; cursor:pointer;">&#10095;</span>
      <p id="lightbox-caption" style="color:white; margin-top:15px;"></p>
    `;
    document.body.appendChild(lightbox);

    function openLightbox(index) {
      currentImageIndex = index;
      const img = galleryImages[index];
      const lbImg = document.getElementById('lightbox-img');
      lbImg.src = img.src;
      lbImg.alt = img.alt || '';
      document.getElementById('lightbox-caption').textContent = img.alt || '';
      lightbox.style.display = 'flex';
      document.getElementById('lightbox-close').focus();
    }

    galleryImages.forEach((img, index) => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => openLightbox(index));
    });

    document.getElementById('lightbox-close').addEventListener('click', () => lightbox.style.display = 'none');
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
  }

  const enquiryForm = document.getElementById('enquiry-form');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!this.checkValidity()) { this.reportValidity(); return; }
      const service = document.getElementById('enquiry-service').value;
      const duration = document.getElementById('enquiry-duration').value;
      const email = document.getElementById('enquiry-email').value;
      const feedback = this.querySelector('[data-form-feedback]');
      let cost = 'R300'; let availability = 'Spaces available next week.';
      if (service === 'Computer skills') { cost = 'R500'; availability = 'Spaces available - starts Monday.'; }
      if (service === 'Academic support') { cost = 'R300'; availability = 'Tutor available daily.'; }
      if (service === 'Mentorship') { cost = 'Free'; availability = 'Mentor assigned within 48 hours.'; }
      if (service === 'Sports coaching') { cost = 'R200'; availability = 'Fully booked until December.'; }
      feedback.style.display = 'block'; feedback.style.background = '#e6f4ea'; feedback.style.padding = '12px'; feedback.style.borderRadius = '8px';
      feedback.innerHTML = `Thank you!<br>Service: <strong>${service}</strong><br>Duration: ${duration}<br>Estimated Cost: <strong>${cost}</strong><br>Availability: <strong>${availability}</strong> We will email you at ${email}.`;
      feedback.scrollIntoView({ behavior: 'smooth' });
    });
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!this.checkValidity()) { this.reportValidity(); return; }
      const name = document.getElementById('contact-name').value;
      const email = document.getElementById('contact-email').value;
      const feedback = this.querySelector('[data-form-feedback]');
      feedback.style.display = 'block'; feedback.style.background = '#e6f4ea'; feedback.style.padding = '12px'; feedback.style.borderRadius = '8px';
      feedback.innerHTML = `Thank you, ${name}!<br><strong>Message sent successfully!</strong><br>We will reply to <strong>${email}</strong> within 24 hours.`;
      this.reset(); feedback.scrollIntoView({ behavior: 'smooth' });
    });
  }

  const volunteerForm = document.getElementById('volunteer-form');
  if (volunteerForm) {
    volunteerForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!this.checkValidity()) { this.reportValidity(); return; }
      const name = document.getElementById('volunteer-name')?.value || 'Volunteer';
      const email = document.getElementById('volunteer-email')?.value || '';
      const feedback = this.querySelector('[data-form-feedback]');
      feedback.style.display = 'block'; feedback.style.background = '#e6f4ea'; feedback.style.borderLeft = '4px solid #34a853'; feedback.style.padding = '12px'; feedback.style.borderRadius = '8px';
      feedback.innerHTML = `Thank you, ${name}!<br><strong>Volunteer application sent!</strong><br>We will contact you at <strong>${email}</strong> for orientation.<br>Availability: <strong>Training starts next Monday.</strong>`;
      this.reset(); feedback.scrollIntoView({ behavior: 'smooth' });
    });
  }

  const donateForm = document.getElementById('donate-form');
  if (donateForm) {
    donateForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!this.checkValidity()) { this.reportValidity(); return; }
      const name = document.getElementById('donate-name')?.value || 'Donor';
      const amount = document.getElementById('donate-amount')?.value || 'R100';
      const method = document.getElementById('donate-method')?.value || 'EFT';
      const email = document.getElementById('donate-email')?.value || '';
      const feedback = this.querySelector('[data-form-feedback]');
      feedback.style.display = 'block'; feedback.style.background = '#e6f4ea'; feedback.style.borderLeft = '4px solid #34a853'; feedback.style.padding = '12px'; feedback.style.borderRadius = '8px';
      feedback.innerHTML = `
        Thank you, ${name}!<br>
        <strong>Donation pledge received: ${amount}</strong><br>
        Method: <strong>${method}</strong><br>
        We will email donation details to <strong>${email}</strong>.<br>
        Availability: <strong>Tax certificate available within 48 hours.</strong><br>
        Cost: <strong>100% goes to youth programmes - no admin fee.</strong>
      `;
      this.reset(); feedback.scrollIntoView({ behavior: 'smooth' });
    });
  }

  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      if (!this.checkValidity()) { this.reportValidity(); return; }
      const email = this.querySelector('input[type="email"]').value;
      const feedback = this.querySelector('[data-form-feedback]') || document.createElement('div');
      if (!this.querySelector('[data-form-feedback]')) { feedback.setAttribute('data-form-feedback',''); this.appendChild(feedback); }
      feedback.style.display = 'block'; feedback.style.marginTop = '10px'; feedback.style.color = 'green';
      feedback.textContent = `Subscribed! Updates will be sent to ${email}`;
      this.reset();
    });
  }

});

  
   
    
     

  

    

     
