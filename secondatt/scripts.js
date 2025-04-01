document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    
    if (form) {
    form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Message sent successfully!");
    form.reset();
    });
    }
    
    const cart = [];
    document.querySelectorAll(".product button").forEach(button => {
    button.addEventListener("click", function () {
    alert("Added to cart!");
    });
    });
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        let cart = [];
        const cartItems = document.getElementById("cart-items");
        const cartTotal = document.getElementById("cart-total");
        
        // Add event listeners to "Add to Cart" buttons
        document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
        const name = this.getAttribute("data-name");
        const price = parseFloat(this.getAttribute("data-price"));
        
        // Add product to cart array
        cart.push({ name, price });
        
        // Update cart display
        updateCart();
        });
        });
        
        function updateCart() {
        // Clear cart display
        cartItems.innerHTML = "";
        
        let total = 0;
        cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
        });
        
        // Update total price
        cartTotal.textContent = `Total: $${total}`;
        }
        });