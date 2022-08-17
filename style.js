
function theme() {
  document.body.classList.toggle("dark-theme");
  let theme = document.body.classList.contains("dark-theme") ? "Light" : "Dark";
  document.getElementById("light-text").innerHTML = theme;
  localStorage.setItem("theme", theme);
}

function theme_init() {
  let theme = localStorage.getItem("theme") || "Dark";
  theme === "Light"
    ? document.body.classList.add("dark-theme")
    : document.body.classList.remove("dark-theme");
  document.getElementById("light-text").innerHTML = theme;
}

let balanceValue = document.getElementById("balance").textContent;
let balance = document.getElementById("balance");

balanceValue = balanceValue.split('₽').join('');

balanceValue = Number(balanceValue);

balanceValue > 0
? (balance.style.animation = "animateColor 3s linear infinite")
: (balance.style.color = "#04fcff"),
(balance.style.textShadow = "0 0 3px #04fcff42, 0 0 8px #04fcff42");


  

