const products = [
    {
      name: "MAGGI WITH SALAD GRAVY",
      image: "assets/Images/soup.png",
      price: 99,
      rating: 5,
      reviews: 243,
      description: "Tasty combo of spicy noodles and fresh veggies."
    },
    {
      name: "CAKE CHERRY BLACK SWEET",
      image: "assets/Images/pan cake.png",
      price: 69,
      rating: 4,
      reviews: 198,
      description: "Rich chocolate cake topped with cherries."
    },
    {
      name: "VEG FOOD BANANA SALAD",
      image: "assets/Images/Pastreis pic.png",
      price: 104,
      rating: 4.5,
      reviews: 312,
      description: "Juicy burger with extra cheese and fresh lettuce."
    },
    {
      name: "EGG GRAVY AND CHICK STEAK",
      image: "assets/Images/egg meal.png",
      price: 119,
      rating: 4,
      reviews: 275,
      description: "Classic veg pizza with extra toppings and cheese."
    },
    {
      name: "SUSHI CAKE FOR LIGHT SWEET",
      image: "assets/Images/ghee cake.png",
      price: 99,
      rating: 5,
      reviews: 320,
      description: "Delicious steamed dumplings filled with chicken."
    },
    {
      name: "CHICKEN BIRIYANI",
      image: "assets/Images/chicken-biriyani.png",
      price: 149,
      rating: 4,
      reviews: 180,
      description: "Delicious steamed dumplings filled with chicken."
    },
    {
      name: "PIZA TOMATO FLAVOR",
      image: "assets/Images/pizza pic.png",
      price: 109,
      rating: 4,
      reviews: 124,
      description: "Soft noodles tossed in soy sauce and veggies."
    },
    {
      name: "ROSE BERRY CAKE",
      image: "assets/Images/Dessert cake.png",
      price: 49,
      rating: 5,
      reviews: 210,
      description: "Chilled and refreshing sweet coffee blend."
    },
    {
      name: "BURGER KING",
      image: "assets/Images/Burger pic.png",
      price: 78,
      rating: 4,
      reviews: 150,
      description: "Mexican-style taco filled with spicy beans and cheese."
    },
    {
      name: "SOY BEAN GRAVY VEG FOOD",
      image: "assets/Images/veg meal.png",
      price: 109,
      rating: 4.5,
      reviews: 190,
      description: "Grilled sandwich with cheese, veggies, and sauces."
    },
    {
      name: "MUTTON SUKKA",
      image: "assets/Images/mutton sukka.png",
      price: 243,
      rating: 5,
      reviews: 134,
      description: "Premium sushi rolls with fresh fish and rice."
    },
    {
      name: "SALMON FOOD WITH CURRY",
      image: "assets/Images/salmon-fry.png",
      price: 132,
      rating: 4,
      reviews: 98,
      description: "Hotdog with sausage, mustard and crispy onions."
    },
    {
      name: "BEEF STEAK",
      image: "assets/Images/beef steak.png",
      price: 169,
      rating: 4.5,
      reviews: 155,
      description: "Healthy mix of greens, nuts, and fruits."
    },
    {
      name: "CAKE BERRY",
      image: "assets/Images/choco cake.png",
      price: 79,
      rating: 4,
      reviews: 170,
      description: "Spicy paneer rolled in soft paratha bread."
    },
    {
      name: "EGG BIRIYANI",
      image: "assets/Images/sasusage egg.png",
      price: 119,
      rating: 5,
      reviews: 288,
      description: "Chicken pizza loaded with meat and cheese."
    },
    {
      name: "TOAMTO SOUP CHILLI",
      image: "assets/Images/soup.png",
      price: 89,
      rating: 4.5,
      reviews: 190,
      description: "Chilled dessert cup with mixed flavors."
    },
    {
      name: "GHEE CAKE FOR KIDS",
      image: "assets/Images/pan cake.png",
      price: 89,
      rating: 4,
      reviews: 215,
      description: "Crispy golden fries served with ketchup."
    },
    {
      name: "VEG CURRY FLOWERS",
      image: "assets/Images/veg meal.png",
      price: 129,
      rating: 4.5,
      reviews: 250,
      description: "Creamy pasta with extra cheese and herbs."
    },
    {
      name: "OMBLET CURRY AND GRAVY",
      image: "assets/Images/egg meal.png",
      price: 149,
      rating: 4,
      reviews: 130,
      description: "Aromatic mushroom rice cooked with spices."
    },
    {
      name: "EGG PIZZA AND SALAD",
      image: "assets/Images/pizza pic.png",
      price: 99,
      rating: 4.5,
      reviews: 160,
      description: "Crispy veggie spring rolls with chili sauce."
    },
    {
      name: "TASTY SWEET CAKE",
      image: "assets/Images/ghee cake.png",
      price: 123,
      rating: 4.5,
      reviews: 175,
      description: "Crispy and juicy chicken nuggets pack."
    },
    {
      name: "MUTTON CURRY AND SUKKA",
      image: "assets/Images/mutton sukka.png",
      price: 129,
      rating: 5,
      reviews: 222,
      description: "Complete Indian meal with rice, dal, and curry."
    },
    {
      name: "EGG RICE AND BIRIYANI",
      image: "assets/Images/sasusage egg.png",
      price: 189,
      rating: 4.5,
      reviews: 195,
      description: "Rich and creamy lentils cooked with butter."
    },
    {
      name: "CHICKEN FOOD AND PIZZA",
      image: "assets/Images/beef steak.png",
      price: 89,
      rating: 4.5,
      reviews: 169,
      description: "Refreshing yogurt-based sweet drink."
    },
    {
      name: "STRAWBERRY CAKE AND CHERRY",
      image: "assets/Images/Dessert cake.png",
      price: 59,
      rating: 5,
      reviews: 330,
      description: "Aromatic rice with tender chicken and spices."
    }
  ];
  
  const productGrid = document.getElementById('productGrid');
  const searchInput = document.getElementById('searchInput');

  function renderProducts(products) {
    productGrid.innerHTML = '';
  
    products.forEach((product, index) => {
      const card = document.createElement('div');
      card.className = 'col';
  
      card.innerHTML = `
        <div class="bg-white p-2 custom-card h-100">
          <img src="${product.image}" alt="${product.name}" class="img-fluid mb-2">
          <h6 class="fw-bold" style="font-size:12px;">${product.name}</h6>
          <h6 style="font-size:10px;">⭐⭐⭐⭐${product.rating >= 5 ? '⭐' : ''} (${product.reviews})</h6>
          <p class="small" style="font-size:10px;">${product.description}</p>
          <div class="d-flex justify-content-between align-items-center">
            <span class="text-danger fw-bold">₹${product.price}</span>
            <button class="btn btn-success d-flex align-items-center justify-content-center shadow-none add-to-cart" data-index="${index}">
              <i class='bx bx-cart-alt text-white fs-5'></i>
            </button>
          </div>
        </div>
      `;
  
      productGrid.appendChild(card);
    });
  
    setupAddToCartListeners(products);  // Attach listeners after rendering
  }
  
// Filter and display matching products
function performSearch() {
    const query = searchInput.value.toLowerCase().trim();
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(query)
    );
    renderProducts(filtered);
  }
  
  // Search on typing
  searchInput.addEventListener('input', performSearch);

//   Filter products by price range
const priceRange = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');

function filterProductByPrice(){
    const selectedPrice=priceRange.value;
    const minPrice=99;
    const maxPrice=259;

    priceValue.innerText=`${minPrice} - ${selectedPrice}`;
    const filteredProducts=products.filter(product=>product.price<=selectedPrice);
    renderProducts(filteredProducts);
}
priceRange.addEventListener('input', filterProductByPrice);

// Render cart
let cart = [];

function setupAddToCartListeners(products) {
  const buttons = document.querySelectorAll('.add-to-cart');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const index = button.getAttribute('data-index');
      const product = products[index];
      addToCart(product);
    });
  });
}

function addToCart(product) {
  const existingItem = cart.find(item => item.name === product.name);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
    saveCartToLocalStorage();
  }
  renderCart();
}


renderProducts(products); // Call this to load products

function renderCart() {
  const cartItemsContainer = document.getElementById('cartItemsContainer');
  const subtotalElement = document.getElementById('subtotal');
  const totalElement = document.getElementById('total');
  const taxElement = document.getElementById('tax');
  const deliveryElement = document.getElementById('delivery');

  cartItemsContainer.innerHTML = '';

    // If the cart is empty, show a message
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="text-white text-center py-5">
          <h5>Your cart is empty 🛒</h5>
        </div>
      `;
      return; // Stop further execution if cart is empty
    }

  let subtotal = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity; 
    subtotal += itemTotal;

    const itemDiv = document.createElement('div');
    itemDiv.className = 'mb-3 p-2 bg-white me-5 custom-cardradius';

    itemDiv.innerHTML = `
      <div class="d-flex justify-content-between align-items-center px-2">
        <img src="${item.image}" alt="${item.name}" style="width: 80px; height: 80px;" class="img-fluid me-2">
        <div class="flex-grow-1">
          <h6 class="mb-1 fw-bold">${item.name}</h6>
          <p class="mb-1 small">${item.description}</p>
          <div class="d-flex align-items-center">
            <button class="btn btn-sm btn-outline-secondary shadow-none fw-bold px-2 py-1 rounded-circle me-2" onclick="updateQuantity(${index}, -1)">-</button>
            <input type="text" class="form-control text-center shadow-none border-0 p-0" style="width: 30px;" value="${item.quantity}" readonly>
            <button class="btn btn-sm btn-danger fw-bold shadow-none px-2 py-1 rounded-circle ms-2" onclick="updateQuantity(${index}, 1)">+</button>
          </div>
        </div>
        <div class="d-flex flex-column align-items-end">
          <span class="fw-bold"><i class='bx bx-rupee'></i>${itemTotal.toFixed(2)}</span>
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

  subtotalElement.textContent = `₹${subtotal.toFixed(2)}`;
  taxElement.textContent = `₹${tax.toFixed(2)}`;
  deliveryElement.textContent = `₹${delivery.toFixed(2)}`;
  totalElement.textContent = `₹${total.toFixed(2)}`;
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

