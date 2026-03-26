import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// 🔥 Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDLFD0a4IWDyC5jpB8Xw1Atti5M3I-Zg-M",
  authDomain: "shopping-website-3dde5.firebaseapp.com",
  projectId: "shopping-website-3dde5",
  storageBucket: "shopping-website-3dde5.firebasestorage.app",
  messagingSenderId: "286025680401",
  appId: "1:286025680401:web:b4e7e5bcf39e92799993b0",
  measurementId: "G-H2XZK6K4JP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Data
let cart = [];
let products = [];

// Load Products
async function loadProducts() {
  const container = document.getElementById("products");
  container.innerHTML = "<h3>Loading products...</h3>";

  try {
    const snapshot = await getDocs(collection(db, "products"));
    products = snapshot.docs.map(doc => doc.data());

    container.innerHTML = "";

    products.forEach((p, index) => {
      container.innerHTML += `
        <div class="card">
          <img src="${p.image}" width="100%">
          <h3>${p.name}</h3>
          <p>₹${p.price}</p>
          <button onclick="addToCart(${index})">Add</button>
        </div>
      `;
    });

  } catch (error) {
    container.innerHTML = "<h3>Error loading products ❌</h3>";
    console.error(error);
  }
}

// Add to Cart (FIXED SAFE VERSION)
window.addToCart = (index) => {
  cart.push(products[index]);
  document.getElementById("cart-count").innerText = cart.length;
};

// Place Order (FIXED)
window.placeOrder = async () => {
  if (cart.length === 0) {
    alert("Cart is empty ❌");
    return;
  }

  try {
    await addDoc(collection(db, "orders"), {
      items: cart,
      date: new Date()
    });

    alert("Order Placed ✅");

    cart = [];
    document.getElementById("cart-count").innerText = 0;

  } catch (error) {
    alert("Order Failed ❌");
    console.error(error);
  }
};

// Start app
loadProducts();
