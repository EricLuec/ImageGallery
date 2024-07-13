document.addEventListener('DOMContentLoaded', () => {
    const search = document.querySelector(".search-box input"),
          images = document.querySelectorAll(".card-container"),
          modal = document.getElementById("modal"),
          modalImg = document.getElementById("modal-img"),
          span = document.getElementsByClassName("close")[0],
          addCarBtn = document.getElementById('add-car-btn'),
          carForm = document.getElementById('car-form');
  
    search.addEventListener("keyup", e => {
      if (e.key === "Enter") {
        let searchValue = search.value.toLowerCase();
        images.forEach(image => {
          if (image.dataset.name.toLowerCase().includes(searchValue)) {
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
        link.href = image.querySelector('img').src.replace(/\.cr2$/, '.png'); 
        link.download = `${image.querySelector('img').alt}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  
      image.querySelector('.download-cr2-btn').addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = image.querySelector('img').src.replace(/\.png$/, '.cr2'); 
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
  
    // Add event listener for the add car button
    addCarBtn.addEventListener('click', () => {
      carForm.style.display = (carForm.style.display === 'none' || carForm.style.display === '') ? 'block' : 'none';
    });
  
    // function to add a new car card, adds css of class "card-container" and creates card where id="add-card"
    function newCar() {
      // <img> und <h6> User inputs
      const h6UserInput = document.getElementById("h6Text").value;
      const carImageInput = document.getElementById("carImage");
      const carImageFile = carImageInput.files[0];
  
      if (!carImageFile) {
        alert("Please select at least one image.");
        return;
      }
  
      // <div> create & style
      const newDiv = document.createElement("div");
      newDiv.classList.add("card-container");
  
      // <h6> create & style
      const newH6 = document.createElement("h6");
      newH6.textContent = h6UserInput;
      newH6.classList.add("title-h6");
  
      // <img> create, style & set src
      const newImg = document.createElement("img");
      newImg.classList.add("car-pic");
      
      const reader = new FileReader();
      reader.onload = function (e) {
        newImg.src = e.target.result;
      };
      reader.readAsDataURL(carImageFile);
  
      // <button> create & style
      const newDownloadBtn = document.createElement("button");
      newDownloadBtn.textContent = "Download (PNG)"
      newDownloadBtn.classList.add("download-png-btn");
  
      // <img>, <h6> and <button> add to div
      newDiv.appendChild(newImg);
      newDiv.appendChild(newH6);
      newDiv.appendChild(newDownloadBtn);
  
      // <div> append to container with id="add-card"
      const div = document.getElementById("add-card");
      div.appendChild(newDiv);
  
      // <img> and <h6> clear input field
      document.getElementById("h6Text").value = '';
      carImageInput.value = '';
    }
  });
  