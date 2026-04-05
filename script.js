let total = 0;
let products = [];

function addProduct() {
    let nameInput = document.getElementById("name");
    let priceInput = document.getElementById("price");
    let message = document.getElementById("message");
    let productsList = document.getElementById("products");
    let totalText = document.getElementById("total");

    let name = nameInput.value.trim();
    let price = Number(priceInput.value);

    if (name == "") {
        message.textContent = "Название пустое";
        return;
    }

    if (priceInput.value == "") {
        message.textContent = "Введите цену";
        return;
    }

    if (price <= 0) {
        message.textContent = "Цена должна быть больше нуля";
        return;
    }

    total = total + price;

    products.push({
        name: name,
        price: price
    });

    let li = document.createElement("li");
    li.textContent = name + " — " + price + " грн";
    productsList.appendChild(li);

    totalText.textContent = "Итого: " + total + " грн";
    message.textContent = "Товар добавлен";

    nameInput.value = "";
    priceInput.value = "";
}