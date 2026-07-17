

function filterProducts(category){

    const cards = document.querySelectorAll(".product-card");
    
    cards.forEach(card=>{
    
    if(category==="all"){
    card.style.display="block";
    }
    else if(card.dataset.category===category){
    card.style.display="block";
    }
    else{
    card.style.display="none";
    }
    
    });
    
    }


    function toggleFilter(){

        let filter = document.getElementById("filterBox");
    
        if(filter.style.display === "none"){
            filter.style.display = "block";
        }else{
            filter.style.display = "none";
        }
    
    }

    function addToCart(name,price,img){
        let cart = JSON.parse(localStorage.getItem("cart")) ||

        cart.push({
            name:name,
            price:price,
            img:img,
        });

        localStorage.setItem("cart",JSON.stringify(cart));
        alert("name + added to cart");

        }