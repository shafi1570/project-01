function payNow(){

    let cart = JSON.parse(localStorage.getItem("checkout")) || [];
    
    if(cart.length === 0){
    alert("No items");
    return;
    }
    
    // 👉 move to invoice
    localStorage.setItem("invoice", JSON.stringify(cart));
    
    window.location.href = "invoice.html";
    }
    
    
    localStorage.setItem(
    "invoice",
    JSON.stringify(cart)
    );