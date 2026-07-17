let current = JSON.parse(localStorage.getItem("currentProduct"));

if(current){
document.getElementById("product-name").innerText = current.name;
document.getElementById("product-price").innerText = "₹" + current.price;
document.getElementById("product-img").src = current.img;
}

// ADD CURRENT PRODUCT
function addCurrentProduct(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push(current);

localStorage.setItem("cart", JSON.stringify(cart));

alert("Added to cart");
}