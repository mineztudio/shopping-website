// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);

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
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const db = getFirestore(app);
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

async function test() {
  const snapshot = await getDocs(collection(db, "products"));
  console.log(snapshot.docs.map(doc => doc.data()));
}

test();
