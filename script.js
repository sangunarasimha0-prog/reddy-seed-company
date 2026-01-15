let cart = [];
let total = 0;

function add(name, price) {
  cart.push(name + " ₹" + price);
  total += price;
  update();
}

function update() {
  document.getElementById("items").innerHTML =
    cart.map(i => "<li>"+i+"</li>").join("");
  document.getElementById("total").innerText = total;

  document.getElementById("upi").href =
    `upi://pay?pa=8328288295@upi&pn=Sangu%20Lakshmi%20Narsimha%20Reddy&am=${total}&cu=INR`;
}

function sendOrder(e) {
  e.preventDefault();

  let msg =
    "New Order\n\n" +
    "Name: " + name.value + "\n" +
    "Phone: " + phone.value + "\n" +
    "Address: " + address.value + "\n" +
    "Items: " + cart.join(", ") + "\n" +
    "Total: ₹" + total;

  window.open(
    "https://wa.me/918328288295?text=" + encodeURIComponent(msg)
  );
}

function telugu() {
  document.getElementById("title").innerText =
    "🌱 రెడ్డి విత్తనాల సంస్థ";
}

function english() {
  document.getElementById("title").innerText =
    "🌱 Reddy Seeds Company";
}