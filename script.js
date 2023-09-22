function check() {
  var add = 0;
  if (document.getElementById("chai").checked) {
    add += 15;
  }
  if (document.getElementById("hot_Coffee").checked) {
    add += 35;
  }
  if (document.getElementById("cold_Coffee").checked) {
    add += 40;
  }
  if (document.getElementById("Dark_Chocolate_Coffee").checked) {
    add += 60;
  }
  if (document.getElementById("Paner_Pizza").checked) {
    add += 199;
  }
  if (document.getElementById("Cron_Pizza").checked) {
    add += 158;
  }
  if (document.getElementById("Veg_Burger").checked) {
    add += 25;
  }
  if (document.getElementById("Chole_Bhature").checked) {
    add += 180;
  }
  if (document.getElementById("Plain_Roti").checked) {
    add += 8;
  }
  if (document.getElementById("Butter_Roti").checked) {
    add += 12;
  }
  if (document.getElementById("Sahi_Paneer").checked) {
    add += 150;
  }
  if (document.getElementById("Kadhai_Paneer").checked) {
    add += 140;
  }
  if (document.getElementById("Rayeta").checked) {
    add += 15;
  }
  if (document.getElementById("Momos").checked) {
    add += 50;
  }
  if (document.getElementById("Fried_momos").checked) {
    add += 60;
  }
  if (document.getElementById("Sandwich").checked) {
    add += 25;
  }
  if (document.getElementById("Noodles").checked) {
    add += 30;
  }
  if (document.getElementById("Gulab-jamun").checked) {
    add += 80;
  }

  var p = add;
  var price = p + " ₹";
  document.getElementById("total").innerHTML = price;
}

check();
