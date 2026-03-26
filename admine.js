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

const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Admin login
window.login = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  await signInWithEmailAndPassword(auth, email, password);
  alert("Logged in ✅");
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
