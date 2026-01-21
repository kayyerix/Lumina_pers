const newsGrid = document.getElementById('newsGrid');

// Ambil data dari JSON
fetch('../data/berita.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      const card = document.createElement('article');
      card.classList.add('news-card');

      card.innerHTML = `
        <img src="${item.gambar}" alt="${item.judul}">
        <h4>${item.judul}</h4>
        <p class="news-date">${item.tanggal}</p>
        <a href="${item.link}" class="read-more">Baca</a>
      `;

      newsGrid.appendChild(card);
    });
  })
  .catch(error => console.error('Gagal memuat berita:', error));
