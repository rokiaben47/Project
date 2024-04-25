const images = ["image1.jpeg", "image2.jpeg", "image3.jpeg"]; // Add more image URLs here
let currentImageIndex = 0;
const slideshowImage = document.getElementById("slideshowImage");

function changeImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  slideshowImage.src = images[currentImageIndex];
}

setInterval(changeImage, 5000); 
    function displayResult(result) {
      document.getElementById('resultDisplay').innerText = result;
    }
