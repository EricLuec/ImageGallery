const search = document.querySelector(".search-box input"),
      images = document.querySelectorAll(".image-box"),
      modal = document.getElementById("modal"),
      modalImg = document.getElementById("modal-img"),
      span = document.getElementsByClassName("close")[0];

search.addEventListener("keyup", e => {
    if (e.key === "Enter") {
        let searchValue = search.value.toLowerCase();
        images.forEach(image => {
            if (image.dataset.name === searchValue) {
                image.style.display = "block";
            } else {
                image.style.display = "none";
            }
        });
    }
});

search.addEventListener("keyup", () => {
    if (search.value !== "") return;
    images.forEach(image => {
        image.style.display = "block";
    });
});

images.forEach(image => {
    image.querySelector('img').addEventListener('click', () => {
        modal.style.display = "block";
        modalImg.src = image.querySelector('img').src;
    });

    image.querySelector('.download-png-btn').addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = image.querySelector('img').src.replace(/\.cr2$/, '.png'); // Assuming the PNG version has the same name but different extension
        link.download = `${image.querySelector('img').alt}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    image.querySelector('.download-cr2-btn').addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = image.querySelector('img').src.replace(/\.png$/, '.cr2'); // Assuming the CR2 version has the same name but different extension
        link.download = `${image.querySelector('img').alt}.cr2`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});

span.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

document.getElementById('createButton').addEventListener('click', function() {
    let 
})