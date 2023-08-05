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
