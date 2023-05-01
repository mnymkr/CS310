function validateForm() {
    // Get the values of the age and mobile number fields
    var age = document.forms["signup-form"]["age"].value;
    var mobileNumber = document.forms["signup-form"]["number"].value;

    // Validate the age field
    if (isNaN(age) || age < 0 || age > 200) {
        alert("Age must be a number between 0 and 200.");
        return false;
    }

    // Validate the mobile number field
    var vietnameseMobileNumberPattern = /^(0|\+84)[0-9]{7}$/;
    if (!vietnameseMobileNumberPattern.test(mobileNumber)) {
        alert("Invalid Vietnamese mobile number.");
        return false;
    }

    // If all validations pass, return true
    return true;
}

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

// Add an event listener to the "Send" button to run the form validation when clicked
document.getElementById("submit").addEventListener("click", validateForm);

// NAV MENU FOR MOBILE
let isOpenNavMenu = 0;

function openNavMenu() {
    let navMenuContainer = document.querySelector(".nav_menu_container");
    if (isOpenNavMenu == 0) { // menu is currently closed
        navMenuContainer.style.display = 'flex';
        isOpenNavMenu = 1;
    } else { // menu is currently open
        navMenuContainer.style.display = 'none'
        isOpenNavMenu = 0;
    }
}