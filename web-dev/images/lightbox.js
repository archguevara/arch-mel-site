document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.image-grid img');
  const lightbox = document.createElement('div');
  lightbox.classList.add('lightbox');
  lightbox.innerHTML = `
    <span class="lightbox-close">&times;</span>
    <div class="lightbox-content">
      <img src="" alt="">
      <div class="lightbox-title"></div>
      <div class="lightbox-description"></div>
    </div>
  `;
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector('img');
  const lightboxTitle = lightbox.querySelector('.lightbox-title');
  const lightboxDesc = lightbox.querySelector('.lightbox-description');
  const lightboxClose = lightbox.querySelector('.lightbox-close');

  images.forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxTitle.textContent = img.dataset.title || img.alt;
      lightboxDesc.textContent = img.dataset.description || '';
      lightbox.style.display = 'flex';
    });
  });

  lightboxClose.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });
  
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
});
