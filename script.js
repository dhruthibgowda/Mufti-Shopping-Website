document.addEventListener("DOMContentLoaded", () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount = document.getElementById("cart-count");
  if (cartCount) cartCount.textContent = cart.length;

  document.querySelectorAll(".add-cart").forEach(button => {
    button.addEventListener("click", () => {
      const card = button.parentElement;
      const name = card.querySelector("h3").innerText;
      const price = card.querySelector("p").innerText.replace("₹","");

      cart.push({ name, price: Number(price) });
      localStorage.setItem("cart", JSON.stringify(cart));

      if (cartCount) cartCount.textContent = cart.length;
    });
  });
});
function addToCart(name, price, image) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({
    name: name,
    price: price,
    image: image
  });

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Item added to cart");
}
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartDiv = document.getElementById("cart-items");
let total = 0;

cartDiv.innerHTML = "";

cart.forEach((item, index) => {
  total += item.price;

  cartDiv.innerHTML += `
    <div class="cart-card">
      <img src="${item.image}" class="cart-img">

      <div>
        <h4>${item.name}</h4>
        <p>₹${item.price}</p>
      </div>

      <button onclick="removeItem(${index})" class="remove-btn">
        Remove
      </button>
    </div>
  `;
});

document.getElementById("total").innerText = total;

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}
