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

  const name = document.getElementByid("sony fx30 camera").value;
  const price = document.getElementByid("1,00,000").value;
  const category = document.getElementByid("electonics").value;
  const image = document.getElementByid("https://sony.scene7.com/is/image/sonyglobalsolutions/Primary_Image-3?$S7Product$&fmt=png-alpha").value;

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
