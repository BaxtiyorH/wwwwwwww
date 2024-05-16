

const buttons = document.querySelectorAll("button");


let count = 0;


buttons.forEach(button => {
    button.addEventListener('click', function () {

        count++;


        document.getElementById('output').innerHTML = `${count}`;
    });
});


// JavaScript (script.js)

// Mahsulotlar ro'yxati
// JavaScript (script.js)

// Mahsulotlar ro'yxati
const products = [
    { id: 1, name: "Bar chair", price: 2900 },
    { id: 2, name: "Bar chair", price: 2900 },
    { id: 3, name: "Bar chair", price: 2900 },
    { id: 4, name: "Bar chair", price: 2900 },
    { id: 5, name: "Bar chair", price: 2900 },
    { id: 6, name: "Bar chair", price: 2900 },
    { id: 7, name: "Bar chair", price: 2900 },
    { id: 8, name: "Bar chair", price: 2900 },
    { id: 9, name: "Bar chair", price: 2900 },
    // Boshqa mahsulotlar...
];

// Savat elementlari
const cartItemsElement = document.getElementById("cart-items");
const cartTotalElement = document.getElementById("cart-total");
const cartContainer = document.getElementById("cart");

// Savatni ochib yopish uchun funksiya
function toggleCart() {
    cartContainer.classList.toggle("open");
}

// Savatga mahsulot qo'shish funksiyasi
function addToCart(productId) {
    const product = products.find(item => item.id === productId);
    if (product) {
        const cartItem = document.createElement("li");
        cartItem.textContent = `${product.name} - $${product.price.toFixed(2)}`;
        cartItemsElement.appendChild(cartItem);

        // Savat narxini yangilash
        const cartTotal = calculateTotal();
        cartTotalElement.textContent = cartTotal.toFixed(2);

        // Savatni ochish
        toggleCart();
    }
}

// Savatdagi mahsulotlar narxini hisoblash
function calculateTotal() {
    let total = 0;
    const cartItems = cartItemsElement.querySelectorAll("li");
    cartItems.forEach(item => {
        const price = parseFloat(item.textContent.match(/\$\d+\.\d{2}/)[0].substring(1));
        total += price;
    });
    return total;
}

// Sotib olish
function checkout() {
    alert("Pulini tolang!");
}