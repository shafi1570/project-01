let cart = JSON.parse(localStorage.getItem("cart")) || [];

let container = document.getElementById("cart-items");
let totalBox = document.getElementById("total");

function renderCart(){

container.innerHTML = "";

let total = 0;

if(cart.length === 0){
container.innerHTML = "<h3 class='text-center'>Cart is empty</h3>";
totalBox.innerText = 0;
return;
}

cart.forEach((item,index)=>{

total += item.price;

container.innerHTML += `
<div class="cart-card">

<img src="${item.img}">

<div style="flex:1">

<h4>${item.name}</h4>
<p class="price">₹${item.price}</p>

</div>

<button class="btn btn-danger"
onclick="removeItem(${index})">
Remove
</button>

</div>
`;
});

totalBox.innerText = total;
}

function removeItem(index){
cart.splice(index,1);
localStorage.setItem("cart",JSON.stringify(cart));
renderCart();
}

function checkout(){

if(cart.length === 0){
alert("Cart empty");
return;
}

// 👉 move to payment step first
localStorage.setItem("checkout", JSON.stringify(cart));

window.location.href = "payment.html";
}

renderCart();