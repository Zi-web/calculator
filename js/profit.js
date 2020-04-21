"use strict";

function update() {
  let inp = document.getElementById("ageInputId");
  let out = document.getElementById("ageOutputId");
  out.textContent = inp.value;
  out.style.left = (inp.value - inp.min) / (inp.max - inp.min) * 100 + "%";
}

document.getElementById("ageInputId").addEventListener('input', update);
update();

document.getElementById("ageInputId").addEventListener("change", function() {
  document.getElementById("profit__result").innerHTML = (this.value) * 5000 
});
