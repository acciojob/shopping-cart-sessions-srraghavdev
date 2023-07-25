// This is the boilerplate code given for you
// You can modify this code
// Product data
let cart=document.getElementById('cart-list')
const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
    { id: 4, name: "Product 4", price: 40 },
    { id: 5, name: "Product 5", price: 50 },
  ];
  let cartitems=[]
  let count=0
  // DOM elements
  const productList = document.getElementById("product-list");
  let clear=document.getElementById('clear-cart-btn')
  clear.onclick=clearCart
  // Render product list
  function renderProducts() {
    products.forEach((product) => {
      const li = document.createElement("li");
      li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}" onclick="addToCart(${product.id})">Add to Cart</button>`;
      productList.appendChild(li);
    });
  }
  
  // Render cart list
  function renderCart(){
    if(sessionStorage.getItem('items')!=undefined){
       console.log(JSON.parse(sessionStorage.getItem('items')))
        
    }
  }
  
  // Add item to cart
  function addToCart(productId){
    if(cartitems.length===0){count=0}
    let temp=document.createElement('li')
    temp.innerHTML = `${(products[productId-1]).name} - $${products[productId-1].price} <button class="add-to-cart-btn" data-id="${products[productId-1].id}" onclick="removeFromCart(${count})">Remove from Cart</button>`;
    temp.id=`${count}`
    cart.append(temp)
    cartitems.push(products[productId-1])
    sessionStorage.setItem('items',JSON.stringify(cartitems))
    count++
  }
  
  // Remove item from cart
  function removeFromCart(productId){
    let item=document.getElementById(productId)
    item.remove()
    let temp=cart.childNodes
    for(let i=0;i<temp.length;i++){
        console.log(temp)
        if(temp[i].id==productId){
            cartitems.splice(i,1)
        }
    }
    sessionStorage.setItem('items',JSON.stringify(cartitems))
    console.log(cartitems)
    count--
  }
  
  // Clear cart
  function clearCart(){
    cart.innerHTML=''
    cartitems=[]
    sessionStorage.setItem('items',JSON.stringify(cartitems))
  }
  
  // Initial render
  renderProducts();
  renderCart();
  