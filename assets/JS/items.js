// Dummy product data
const items = [
    {
      id: 1,
      name: "VEG SOUP WITH HOT CHILLIES",
      price: 129,
      description: "A warm, comforting bowl of mixed vegetables cooked in a flavorful broth, elevated with the bold heat of hot chilies. This soup strikes the perfect balance between wholesome goodness and fiery spice, making it a delicious choice for those who love a little heat with their veggies.",
      images: ["assets/Images/tomato soup.png", "assets/Images/pumbkin soup.png"],
    },
    {
      id: 2,
      name: "CAKE BLACK BERRY WITH SWEET HOT",
      price: 149,
      description: "A moist and fluffy cake layered with juicy blackberries and rich cream, offering a perfect balance of sweet and tart flavors in every bite. Topped with a luscious blackberry glaze for a fruity finish that delights the senses.",
      images: ["assets/Images/Black berry.png", "assets/Images/Black berry cake.png"],
    },
    {
      id: 3,
      name: "FOOD BANANA SALAD BOOST",
      price: 89,
      description: "A refreshing and nutritious mix of ripe bananas, crunchy nuts, and a splash of citrus, crafted to energize your day. Packed with natural sweetness and fiber, it's the perfect light and healthy power snack.",
      images: ["assets/Images/banana salad.png"],
    },
    {
      id: 4,
      name: "EGG BIRIYANI AND GRAVY",
      price: 99,
      description:"Fragrant basmati rice layered with spiced boiled eggs and aromatic herbs, slow-cooked to perfection. Served with a rich, flavorful gravy that complements every bite, making it a hearty and satisfying meal for biryani lovers.",
      images: ["assets/Images/egg biriyani.png"],
    },
    {
      id: 5,
      name: "SUSHI CAKE SWEET BERRY BLACK",
      price: 119,
      description:"A unique dessert twist on traditional sushi, layered with sweetened rice, rich blackberries, and a medley of berries. Delicately shaped like a cake, it’s a vibrant fusion of fruity sweetness and elegant presentation, perfect for a modern treat.",
      images: ["assets/Images/Sushi cake.png", "assets/Images/sushi.png"],
    },
    {
      id: 6,
      name: "PIZZA TOMATO SPICY",
      price: 124,
      description:"A bold and zesty delight, topped with rich tomato sauce, fiery spices, and melted cheese on a crisp crust. Every bite delivers a punch of heat and flavor, perfect for spice lovers and pizza fans alike.",
      images: ["assets/Images/pizza pic.png"],
    },
    {
      id: 7,
      name: "VEG BURGER ENDLESS TASTE",
      price: 78,
      description:"A deliciously stacked burger bursting with fresh veggies, crispy patties, and creamy sauces, all tucked into a toasted bun. Every bite delivers layers of flavor that keep you coming back for more – truly an endless taste experience.",
      images: ["assets/Images/burger.png"],
    },
    {
      id: 8,
      name: "CHICKEN BIRIYANI AND EGG SPECIAL",
      price: 149,
      description:"A royal blend of aromatic basmati rice, tender chicken pieces, and traditional spices, layered with perfectly boiled eggs for an extra touch of flavor. This special combo brings together the boldness of biryani and the richness of egg in one irresistible dish.",
      images: ["assets/Images/chicken biriyani.png", "assets/Images/biriyani with egg.png"],
    },
  ];
  
  // Get product ID from URL
  const params = new URLSearchParams(window.location.search);
  const itemId = parseInt(params.get("id"));
  const item = items.find(i => i.id === itemId);

  const sizeMap = {
    default: { width: 300, height: 300 },
    special: { width: 400, height: 350 },
  };

  const specialIds=[3, 4, 6, 7]
  const currentSize=specialIds.includes(item.id) ? sizeMap.special : sizeMap.default;
  
    // Set images
    const imagesHTML = item.images.map(src =>
      `<img src="${src}" style="width: ${currentSize.width}px; height: ${currentSize.height}px;">`
    ).join(''); 
    document.getElementById("item-images").innerHTML = imagesHTML;
  
    // Set text content
    document.getElementById("item-title").textContent = item.name;
    document.getElementById("item-price").textContent = item.price;
    document.getElementById("item-description").textContent = item.description;

    
 