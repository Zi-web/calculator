function calcCount() {
      const distance = document.getElementById("distance").value;
      const fuel = document.getElementById("fuel").value;
      const cost =  document.getElementById("cost").value;
      const error = document.getElementById("calc-error");
      const result = document.getElementById("calc-result"); 
      let count = 0;
    
      count = (fuel * distance / 100) * cost;

      result.innerHTML = "Приблизительная стоимость вашей поездки: " + "<br>" + Math.ceil(count) + " рублей";
      error.innerHTML = "";

      if (distance === "") {
            error.innerHTML = "Необходимо заполнить расстояние которое планируете проехать";
            result.innerHTML = "";
      } else if (fuel === "") {
         error.innerHTML = "Необходимо заполнить расход топлива";
         result.innerHTML = "";
      }
      else if (cost === "") {
            error.innerHTML = "Заполните стоимость топлива";
            result.innerHTML = "";
      }

}

const arr = [1, 2];
const result = arr.map(b => b + '1');

console.log(result);