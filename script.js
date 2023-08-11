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
 



  "https://www.coolgenerator.com/Data/Textdesign/202308/bf7b16d0340c4ee11b1422cc243fdc24.png",
   "https://www.coolgenerator.com/Data/Textdesign/202308/bd8da784dd4797584031f923385d5d61.png",
  "https://www.coolgenerator.com/Data/Textdesign/202308/491a76c57c6343fba5c58e7e4d8b7183.png",
  "https://www.coolgenerator.com/Data/Textdesign/202308/fa68c4601fe33752c3d09f10dd1b4c5f.png",
  "https://www.coolgenerator.com/Data/Textdesign/202308/9f4339144274f498d8edce1d542d27ec.png",

 
  "https://www.coolgenerator.com/Data/Textdesign/202308/93115c3152260761402b3708cca17287.png",
  "https://www.coolgenerator.com/Data/Textdesign/202308/a12a1ee125f49af58493ce2657d8ed7c.png"
  
  
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


  setTimeout(changePhoto, 150);
}

// Start changing photos
changePhoto();

document.addEventListener("mousemove", (e) => {
  const cursor = document.querySelector(".circle-cursor");
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
}); 
document.addEventListener("DOMContentLoaded", function () {
  const videoElement = document.getElementById("video-element");
  const websiteContent = document.getElementById("website-content");

  // Show the website content after the video ends
  videoElement.addEventListener("ended", function () {
    videoElement.style.display = "none"; // Hide the video element
    websiteContent.classList.remove("hidden"); // Show the website content
  });
});
