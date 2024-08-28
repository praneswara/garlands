function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  const isVisible = dropdown.style.display === 'block';
  document.querySelectorAll('.dropdown-menu').forEach(menu => menu.style.display = 'none');
  dropdown.style.display = isVisible ? 'none' : 'block';
}

function toggleOffcanvas() {
  const offcanvas = document.getElementById('offcanvas');
  const isVisible = offcanvas.style.display === 'block';
  offcanvas.style.display = isVisible ? 'none' : 'block';
}
document.querySelectorAll(".nav-item.dropdown").forEach((item) => {
  item.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent the click from closing the dropdown
    this.querySelector(".dropdown-menu").classList.toggle("show");
  });
});

// Close dropdowns when clicking outside
document.addEventListener("click", function (event) {
  document.querySelectorAll(".dropdown-menu").forEach((menu) => {
    if (!menu.contains(event.target)) {
      menu.classList.remove("show");
    }
  });
});


let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-item");
const totalSlides = slides.length;

function showSlide(index) {
  if (index >= totalSlides) currentSlide = 0;
  if (index < 0) currentSlide = totalSlides - 1;

  const newTransformValue = -currentSlide * 100;
  document.querySelector(
    ".carousel-inner"
  ).style.transform = `translateX(${newTransformValue}%)`;
}

function nextSlide() {
  currentSlide++;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  showSlide(currentSlide);
}

// Initial display of the first slide
showSlide(currentSlide);

// Automatic sliding every 3 seconds
const interval = setInterval(nextSlide, 3000);

// Stop automatic sliding when user interacts manually
document
  .querySelector(".carousel-control-prev")
  .addEventListener("click", () => {
    clearInterval(interval);
    prevSlide();
  });

document
  .querySelector(".carousel-control-next")
  .addEventListener("click", () => {
    clearInterval(interval);
    nextSlide();
  });
// Select all "ADD TO CART" buttons
const buyNowButtons = document.querySelectorAll(".add-cart");

// Add click event listeners to "ADD TO CART" buttons
buyNowButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".card");
    const itemName = card.querySelector(".card-title").innerText;
    const itemPrice = card.querySelector(".card-text").innerText;
    addToCart(itemName, itemPrice);
  });
});

// Function to add an item to the cart
function addToCart(itemName, itemPrice) {
  const cartItem = document.createElement("li");
  cartItem.classList.add("dropdown-item");
  cartItem.innerText = `${itemName} - ${itemPrice}`;
  cartContent.appendChild(cartItem);
  updateCartMessage();
}

// Function to update cart message
const cartContent = document.getElementById("cart-content");
function updateCartMessage() {
  if (cartContent.children.length > 0) {
    cartContent.querySelector(".dropdown-item").innerHTML="";  // Remove "Your cart is empty"
  }
}

