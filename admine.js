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
  appId: "1:286025680401:web:d14e0384b9e35ff69993b0",
  measurementId: "G-Q54SZ2MCMR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
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
