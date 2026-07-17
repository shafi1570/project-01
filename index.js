// =====================
// REGISTER
// =====================
function register() {

    let username = document.getElementById("registerUser").value;
    let password = document.getElementById("registerPass").value;
    
    if (username === "" || password === "") {
    alert("Fill all fields");
    return;
    }
    
    localStorage.setItem("asusUser", username);
    localStorage.setItem("asusPass", password);
    
    alert("Registration Successful");
    window.location.href = "login.html";
    }
    
    
    // =====================
    // LOGIN
    // =====================
    function login() {
    
    let username = document.getElementById("loginUser").value;
    let password = document.getElementById("loginPass").value;
    
    let savedUser = localStorage.getItem("asusUser");
    let savedPass = localStorage.getItem("asusPass");
    
    if (username === savedUser && password === savedPass) {
    
    localStorage.setItem("loggedIn", "true");
    
    alert("Login Success");
    window.location.href = "index.html";
    
    } else {
    alert("Invalid Username or Password");
    }
    }
    
    
    // =====================
    // CHECK LOGIN
    // =====================
    function checkLogin() {
    
    if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
    }
    }
    
    
    // =====================
    // LOGOUT
    // =====================
    function logout() {
    
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
    }
    
    
    // =====================
    // VIEW PRODUCT
    // =====================
    function viewProduct(name, price, img) {
    
    localStorage.setItem(
    "currentProduct",
    JSON.stringify({ name, price, img })
    );
    
    window.location.href = "product-details.html";
    }
    
    
    // =====================
    // ADD TO CART (FIXED)
    // =====================
    function addToCart(name, price, img) {
    
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    cart.push({ name, price, img });
    
    localStorage.setItem("cart", JSON.stringify(cart));
    
    alert(name + " added to cart");
    
    // 🔥 IMPORTANT: update cart count if exists
    updateCartCount();
    }
    
    
    // =====================
    // CART COUNT (NEW FIX)
    // =====================
    function updateCartCount() {
    
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    let count = document.getElementById("cart-count");
    
    if (count) {
    count.innerText = cart.length;
    }
    }
    
    
    