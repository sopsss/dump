const flipbookContainer = document.querySelector('.flipbook-container');
const flipbook = document.querySelector('.flipbook');

flipbookContainer.addEventListener('click', function() {
  flipbook.classList.toggle('flipbook-flipped');
});