function saveCustomer(){

    let name =
    document.getElementById("name").value;
    
    let place =
    document.getElementById("place").value;
    
    let address =
    document.getElementById("address").value;
    
    let number =
    document.getElementById("number").value;
    
    if(
    name === "" ||
    place === "" ||
    address === "" ||
    number === ""
    ){
    
    alert("Fill all fields");
    
    return;
    
    }
    
    let customer = {
    
    name:name,
    place:place,
    address:address,
    number:number
    
    };
    
    localStorage.setItem(
    "customer",
    JSON.stringify(customer)
    );
    
    window.location.href =
    "payment.html";
    
    }