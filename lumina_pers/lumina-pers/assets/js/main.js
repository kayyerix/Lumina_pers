/* ==================================================
   LUMINA PRESS - MAIN SCRIPT
   Fungsi utama:
   - Ambil data berita dari JSON
   - Tampilkan ke homepage
================================================== */

/* --------------------------
   Saat halaman siap
-------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  initHomepage();
});

/* --------------------------
   Inisialisasi halaman
-------------------------- */
function initHomepage() {
  loadLatestNews();
}

/* --------------------------
   Ambil & tampilkan berita terbaru
-------------------------- */
async function loadLatestNews() {
  const newsContainer = document.querySelector(".news-grid");

  if (!newsContainer) return;

  try {
    const response = await fetch("data/berita.json");
    const newsData = await response.json();

    // Kosongkan isi default
    newsContainer.innerHTML = "";

    // Ambil 3 berita paling atas
    const latestNews = newsData.slice(0, 3);

    latestNews.forEach(news => {
      const newsCard = createNewsCard(news);
      newsContainer.appendChild(newsCard);
    });

  } catch (error) {
    console.error("Gagal memuat data berita:", error);
  }
}

/* --------------------------
   Membuat elemen kartu berita
-------------------------- */
function createNewsCard(news) {
  const article = document.createElement("article");
  article.className = "news-card";

  article.innerHTML = `
    <img src="assets/images/berita/${news.foto_utama}" alt="${news.judul}">
    <div class="news-content">
      <span class="news-date">${formatDate(news.tanggal)}</span>
      <h4>${news.judul}</h4>
      <a href="pages/berita.html" class="read-more">Baca</a>
    </div>
  `;

  return article;
}

/* --------------------------
   Format tanggal (Indonesia)
-------------------------- */
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}
