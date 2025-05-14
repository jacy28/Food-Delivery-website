function renderCart() {
  const cartItemsContainer = document.getElementById('cartItemsContainer');
  const subtotalElement = document.getElementById('subtotal');
  const totalElement = document.getElementById('total');
  const taxElement = document.getElementById('tax');
  const deliveryElement = document.getElementById('delivery');

  cartItemsContainer.innerHTML = '';

    // If the cart is empty, show a message
if (cart.length === 0 || cart.every(item => item.quantity === 0)) {
  cartItemsContainer.innerHTML = `
    <div class="text-white text-center py-5">
      <h5>Your cart is empty 🛒</h5>
    </div>
  `;
  return; // Stop further execution if cart is empty or all items have 0 quantity
}


  let subtotal = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity; 
    subtotal += itemTotal;

    const itemDiv = document.createElement('div');
    itemDiv.className = 'mb-3 p-2 bg-white me-5 custom-cardradius';

    itemDiv.innerHTML = `
    <div class="row align-items-center gx-2">
    <div class="col-3 col-sm-2">
      <img src="${item.image}" alt="${item.name}" class="img-fluid rounded" style="max-height: 80px;">
    </div>
    <div class="col-9 col-sm-6">
      <h6 class="mb-1 fw-bold">${item.name}</h6>
      <p class="mb-1 small">${item.description}</p>
      <div class="d-flex align-items-center flex-wrap">
        <button class="btn btn-sm btn-outline-secondary shadow-none fw-bold px-2 py-1 rounded-circle me-2 mb-1" onclick="updateQuantity(${index}, -1)">-</button>
        <input type="text" class="form-control text-center shadow-none border-0 p-0 mb-1" style="width: 40px;" value="${item.quantity}" readonly>
        <button class="btn btn-sm btn-danger fw-bold shadow-none px-2 py-1 rounded-circle ms-2 mb-1" onclick="updateQuantity(${index}, 1)">+</button>
      </div>
    </div>
    <div class="col-12 col-sm-4 mt-2 mt-sm-0 text-sm-end">
      <span class="fw-bold d-block"><i class='bx bx-rupee'></i>${itemTotal.toFixed(2)}</span>
      <button class="btn btn-sm btn-outline-danger mt-2" onclick="removeFromCart(${index})">Remove</button>
    </div>
  </div>
`;


    cartItemsContainer.appendChild(itemDiv);
  });

  // Basic fee/tax calculation
  const tax = subtotal * 0.05; // 5% tax
  const delivery = subtotal > 0 ? 20 : 0; // Flat delivery fee if there are items
  const total = subtotal + tax + delivery;

subtotalElement.innerHTML = `<i class='bx bx-rupee'></i>${subtotal.toFixed(2)}`;
taxElement.innerHTML = `<i class='bx bx-rupee'></i>${tax.toFixed(2)}`;
deliveryElement.innerHTML = `<i class='bx bx-rupee'></i>${delivery.toFixed(2)}`;
totalElement.innerHTML = `<i class='bx bx-rupee'></i>${total.toFixed(2)}`;
}

function updateQuantity(index, change) {
  cart[index].quantity += change;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  saveCartToLocalStorage();
  renderCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCartToLocalStorage();
  renderCart();
}
function applyCoupon() {
  const code = document.getElementById('discountCode').value.trim().toUpperCase();
  let discount = 0;

  if (code === 'SAVE10') {
    discount = 0.10; // 10% off
  } 
  else {
    alert('Invalid coupon code');
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.05;
  const delivery = code === 'FREESHIP' ? 0 : (subtotal > 0 ? 20 : 0);
  const discountedSubtotal = subtotal - (subtotal * discount);
  const total = discountedSubtotal + tax + delivery;

  document.getElementById('subtotal').innerHTML = `<i class='bx bx-rupee'></i>${discountedSubtotal.toFixed(2)}`;
  document.getElementById('tax').innerHTML = `<i class='bx bx-rupee'></i>${tax.toFixed(2)}`;
  document.getElementById('delivery').innerHTML = `<i class='bx bx-rupee'></i>${delivery.toFixed(2)}`;
  document.getElementById('total').innerHTML = `<i class='bx bx-rupee'></i>${total.toFixed(2)}`;

  alert('Coupon applied!');
}

// Save cart to localStorage
function saveCartToLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cart)); // Save cart array to localStorage as a string
}

// Load cart from localStorage when the page is loaded
function loadCartFromLocalStorage() {
  const storedCart = localStorage.getItem('cart'); // Get cart data from localStorage
  if (storedCart) {
    cart = JSON.parse(storedCart); // If there's a saved cart, parse it back to an array
    renderCart(); // Re-render the cart from the saved data
  }
}
loadCartFromLocalStorage(); // Call this to load the cart data from localStorage

document.getElementById('checkoutbtn').addEventListener("click", function(){
  window.location.href='checkout.html';
});