// Admin login
window.login = async () => {
  try {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    await signInWithEmailAndPassword(auth, email, password);
    alert("Admin Logged In ✅");

  } catch (error) {
    alert("Login Failed ❌ " + error.message);
  }
};

// Add product (already secure + safe)
window.addProduct = async () => {
  if (!auth.currentUser) {
    alert("Please login first ❌");
    return;
  }

  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const category = document.getElementById("category").value;
  const image = document.getElementById("image").value;

  if (!name || !price || !category || !image) {
    alert("Fill all fields ❌");
    return;
  }

  try {
    await addDoc(collection(db, "products"), {
      name,
      price,
      category,
      image
    });

    alert("Product Added 🚀");

  } catch (error) {
    alert("Error ❌ " + error.message);
  }
};
