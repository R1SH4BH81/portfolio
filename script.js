function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Check if the viewCount key exists in localStorage
if (!localStorage.getItem('viewCount')) {
  // If not, create the viewCount key and set its initial value to 0
  localStorage.setItem('viewCount', '0');
}
var count = parseInt(localStorage.getItem('viewCount'));

// Increment the view count by 1
count++;
localStorage.setItem('viewCount', count.toString());

console.log('ignore: ', count);

// Event listener for keydown
window.addEventListener('keydown', function(event) {
  // Check if Shift and F5 keys are pressed simultaneously
  if (event.shiftKey && event.altKey) {
    // Show view count in a sweet alert message
    Swal.fire({
      title: 'View Count',
      text: 'The current view count is: ' + count,
      icon: 'info'
    });
  }
});

const photoUrls = [
  "https://www.coolgenerator.com/Data/Textdesign/202308/7e06d36bb7c742ae18934cef5ce3ed5c.png",
  "https://www.coolgenerator.com/Data/Textdesign/202308/870f6e8946b5a8c4b1e79620af65232e.png",
  "https://www.coolgenerator.com/Data/Textdesign/202308/ac988f296a074feebf6604a676c5d79c.png",
  "https://www.coolgenerator.com/Data/Textdesign/202308/2638d0b212740641f4b31b42312eb31e.png",
  "https://www.coolgenerator.com/Data/Textdesign/202308/85f0c5211187ec83d16707ec0e50354f.png"
  
];

const photosContainer = document.querySelector('.photos-container');
let currentPhotoIndex = 0;

function changePhoto() {
  if (currentPhotoIndex >= photoUrls.length) {
      currentPhotoIndex = 0; // Reset index if the end is reached
  }

  const photo = new Image();
  photo.src = photoUrls[currentPhotoIndex];
  photo.style.height = '70px';
  
  photosContainer.innerHTML = ''; // Clear existing photo
  photosContainer.appendChild(photo);

  currentPhotoIndex++;

  // Show the next photo after a delay (0.1 seconds)
  setTimeout(changePhoto, 100);
}

// Start changing photos
changePhoto();

