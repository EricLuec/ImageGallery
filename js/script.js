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

// Change the like item back and forth from not-liked.svg to liked.svg
function changeImage() {
    const imageElement = document.getElementById("like-icon-change");
    const currentSrc = imageElement.src;

    const filename = currentSrc.substring(currentSrc.lastIndexOf('/') + 1);

    if (filename === 'liked.svg') {
        imageElement.src = '/assets/icons/not-liked.svg';
    } else {
        imageElement.src = '/assets/icons/liked.svg';
    }
}

// Create new car-container with attributes based on input in form
document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let h6Text = document.getElementById('h6Text').value;
    let imgUpload = document.getElementById('carImage').files[0]; 

    if (!imgUpload) {
        console.error('No file selected');
        return;
    }

    let reader = new FileReader();
    reader.onload = function(e) {
        let images = document.createElement('div');
        images.className = 'image-box';
        images.dataset.name = h6Text.toLowerCase();

        let carImg = document.createElement('img');
        carImg.src = e.target.result;
        carImg.alt = h6Text;

        let h6 = document.createElement('h6');
        h6.textContent = h6Text;

        let likeIcon = document.createElement('img');
        likeIcon.src = 'assets/like-icon-unliked.png';

        let downloadButton = document.createElement('button');
        downloadButton.className = 'download-png-btn';
        downloadButton.textContent = 'Download (PNG)';

        images.appendChild(carImg);
        images.appendChild(h6);
        images.appendChild(likeIcon);
        images.appendChild(downloadButton);

        document.getElementById('parentDiv').appendChild(images);

        console.log('Car added successfully');
        document.getElementById('inputForm').reset();
    };

    reader.onerror = function() {
        console.error('Error reading file');
    };

    reader.readAsDataURL(imgUpload);
});
