function update() {
  var inp = document.getElementById("ageInputId");
  var out = document.getElementById("ageOutputId");
  out.textContent = inp.value;
  out.style.left = (inp.value - inp.min) / (inp.max - inp.min) * 100 + "%";
}

document.getElementById("ageInputId").addEventListener('input', update);
update();
/*
function calc2() {
      var range = document.getElementById("ageInputId").value;
      /*var profit_result = document.getElementById("profit__result"); */
      /*var error = document.getElementById("error");*/

/*       var profit_result = 0;
            profit_result = range * 5000;
 
            result.innerHTML = profit_result;
}
*/

/*function Range() {
    var range = document.getElementById("ageInputId").value;
    document.getElementById("profit__result").innerHTML = range * 5000;
}*/


/*
document.getElementById("ageInputId").addEventListener("change", function() {
  document.getElementById("profit__result").innerHTML = "Ваш доход " + (this.value) * 5000 + " рублей";
});
*/

document.getElementById("ageInputId").addEventListener("change", function() {
  document.getElementById("profit__result").innerHTML = (this.value) * 5000 
});
