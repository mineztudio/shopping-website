  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

import {
  getAuth,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

// 🔥 SAME CONFIG HERE
const firebaseConfig = {
  apiKey: "AIzaSyDLFD0a4IWDyC5jpB8Xw1Atti5M3I-Zg-M",
  authDomain: "shopping-website-3dde5.firebaseapp.com",
  projectId: "shopping-website-3dde5",
  storageBucket: "shopping-website-3dde5.firebasestorage.app",
  messagingSenderId: "286025680401",
  appId: "1:286025680401:web:b4e7e5bcf39e92799993b0",
  measurementId: "G-H2XZK6K4JP"
};

// Initialize
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Login
window.login = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  await signInWithEmailAndPassword(auth, email, password);
  alert("Admin Logged In ✅");
};

// Add product
window.addProduct = async () => {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const category = document.getElementById("category").value;
  const image = document.getElementById("image").value;

  await addDoc(collection(db, "products"), {
    name,
    price,
    category,
    image
  });

  alert("Product Added 🚀");
};
