const heroTitle = document.getElementById('heroTitle');
const heroDesc = document.getElementById('heroDesc');
const homeNews = document.getElementById('homeNews');

fetch('data/main.json')
  .then(res => res.json())
  .then(data => {
    // HERO
    heroTitle.textContent = data.hero.judul;
    heroDesc.textContent = data.hero.deskripsi;

    // BERITA TERBARU
    data.berita.forEach(item => {
      const card = document.createElement('article');
      card.className = 'news-card';

      card.innerHTML = `
        <img src="${item.gambar}" alt="">
        <h4>${item.judul}</h4>
        <p>${item.deskripsi}</p>
      `;

      homeNews.appendChild(card);
    });
  })
  .catch(err => {
    console.error('Gagal load data homepage:', err);
    heroTitle.textContent = 'Gagal memuat berita';
    heroDesc.textContent = 'Silakan coba lagi nanti';
  });
