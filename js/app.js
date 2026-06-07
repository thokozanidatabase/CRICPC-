const feed = document.querySelector(".feed");

// Load JSON data
fetch("data/images.json")
    .then(res => res.json())
    .then(data => {
        renderImages(data);
    })
    .catch(err => console.error("Error loading images:", err));

function renderImages(images) {
    feed.innerHTML = "";

    images.forEach(img => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${img.image}" alt="${img.title}">
            <div class="caption">${img.title}</div>

            <div class="download" onclick="downloadImage(this)">
                Download
            </div>
        `;

        feed.appendChild(card);
    });
}
