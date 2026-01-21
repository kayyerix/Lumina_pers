document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".podcast-grid");

  fetch("../data/podcast.json")
    .then(response => response.json())
    .then(data => {
      container.innerHTML = "";

      data.forEach(item => {
        const card = document.createElement("a");
        card.href = item.url;
        card.target = "_blank";
        card.className = "news-card podcast-card";

        const cover = document.createElement("div");
        cover.className = "podcast-cover";

        if (item.cover && item.cover.trim() !== "") {
          cover.style.backgroundImage = `url(${item.cover})`;
          cover.style.backgroundSize = "cover";
          cover.style.backgroundPosition = "center";
        } else {
          cover.style.backgroundColor = "#d1d5db";
        }

        const playBtn = document.createElement("span");
        playBtn.className = "play-btn";
        playBtn.textContent = "▶";

        cover.appendChild(playBtn);

        const info = document.createElement("div");
        info.className = "podcast-info";

        const title = document.createElement("h4");
        title.textContent = item.title;

        const desc = document.createElement("p");
        desc.textContent = item.description;

        info.appendChild(title);
        info.appendChild(desc);

        card.appendChild(cover);
        card.appendChild(info);

        container.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Gagal load podcast:", error);
      container.innerHTML =
        "<p>Data podcast tidak bisa dimuat. Browser lagi bad mood.</p>";
    });
});
