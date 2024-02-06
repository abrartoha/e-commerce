let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');

function showItem(index) {
  items.forEach((item, i) => {
    item.style.display = i === index ? 'block' : 'none';
  });
}

function nextItem() {
  currentIndex = (currentIndex + 1) % items.length;
  showItem(currentIndex);
}

function prevItem() {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showItem(currentIndex);
}

// Initial display
showItem(currentIndex);

// Automatic slideshow (you can customize the interval)
setInterval(nextItem, 3000);
