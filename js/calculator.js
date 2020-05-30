function calc() {
      var date = new Date(document.getElementById("date").value);
      var result = document.getElementById("result"); 
      var error = document.getElementById("error");

      if ((document.getElementById("date").value) == '') {
            result.innerHTML = "";
            error.innerHTML = "Для рассчета необходимо выбрать дату первого дня последней менструации.";
      }
      else {
            date.setDate(date.getDate() + 280);
            result.innerHTML = "Предполагаемая дата родов: "+ date.toLocaleDateString('ru-RU');
            error.innerHTML = "";
      }
}
