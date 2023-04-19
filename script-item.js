function decreaseQuantity() {
    var quantityInput = document.getElementById("quantity");
    if (quantityInput.value > 1) {
        quantityInput.value--;
    }
}

function increaseQuantity() {
    var quantityInput = document.getElementById("quantity");
    quantityInput.value++;
}

function addToCart() {
    var quantityInput = document.getElementById("quantity");
    if (quantityInput.value < 1) {
        alert("You must add at least one item to your cart!");
    }
}