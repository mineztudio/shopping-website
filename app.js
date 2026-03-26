

let products = [];
let cart = [];

// Load products
async function loadProducts() {
  const snapshot = await getDocs(collection(db, "products"));
  products = snapshot.docs.map(doc => doc.data());

  const container = document.getElementById("products");
  container.innerHTML = "";

  products.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.image}" width="100%">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick='addToCart(${JSON.stringify(p)})'>Add</button>
      </div>
    `;
  });
}

// Add to cart
window.addToCart = (product) => {
  cart.push(product);
  document.getElementById("cart-count").innerText = cart.length;
};

// Place order
window.placeOrder = async () => {
  await addDoc(collection(db, "orders"), {
    items: cart,
    date: new Date()
  });

  alert("Order Placed ✅");
  cart = [];
};

loadProducts();
