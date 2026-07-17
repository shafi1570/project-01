let cart =
JSON.parse(localStorage.getItem("invoice")) || [];

let customer =
JSON.parse(localStorage.getItem("customer"));

let box =
document.getElementById("invoice-box");

let total = 0;


/* EMPTY */

if(cart.length === 0){

box.innerHTML = `
<div class="alert alert-danger">
No Invoice Found
</div>
`;

}


/* CUSTOMER */

if(customer){

box.innerHTML += `

<div class="customer-box">

<h3>Customer Details</h3>

<p>
<b>Name:</b>
${customer.name}
</p>

<p>
<b>Place:</b>
${customer.place}
</p>

<p>
<b>Address:</b>
${customer.address}
</p>

<p>
<b>Phone:</b>
${customer.number}
</p>

</div>

`;

}


/* PRODUCTS */

cart.forEach(item=>{

total += Number(item.price);

box.innerHTML += `

<div class="invoice-card">

<div class="row align-items-center">

<div class="col-md-3">

<img src="${item.img}"
class="invoice-img">

</div>

<div class="col-md-6">

<h4>${item.name}</h4>

<p>Premium ASUS Product</p>

</div>

<div class="col-md-3 text-end">

<h4 class="price">
₹${item.price}
</h4>

</div>

</div>

</div>

`;

});


document.getElementById("total")
.innerText = total;


/* FINISH */

function finish(){

let library =
JSON.parse(localStorage.getItem("library")) || [];

library.push(...cart);

localStorage.setItem(
"library",
JSON.stringify(library)
);

localStorage.removeItem("cart");

localStorage.removeItem("checkout");

localStorage.removeItem("invoice");

alert("Purchase Complete");

window.location.href =
"library.html";

}