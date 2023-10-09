// script.js
document.addEventListener("DOMContentLoaded", function () {
    const imageGallery = document.getElementById("image-gallery");
    const loadMoreButton = document.getElementById("load-more");
    let page = 1;

    const loadImages = async () => {
        const apiUrl = `https://picsum.photos/v2/list?page=${page}&limit=9`;
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            data.forEach((image) => {
                const imgElement = document.createElement("img");
                imgElement.src = image.download_url;
                imgElement.alt = image.author;
                imageGallery.appendChild(imgElement);
            });
        } catch (error) {
            console.error("Error fetching images:", error);
        }
    };

    loadImages();

    loadMoreButton.addEventListener("click", () => {
        page++;
        loadImages();
    });
});
