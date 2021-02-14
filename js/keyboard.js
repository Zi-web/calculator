let keys = document.querySelectorAll('.key');
let display = document.querySelector('.display');
let clear = document.querySelector('.clear');

 for (let key of keys) {
  key.onclick = function () {
    //display.textContent = display.textContent + key.textContent;
    //display.textContent += key.textContent; // краткая запись
    display.append(key.textContent); // с помощью метода append
  }
};

clear.onclick = function () {
    display.textContent = '';
}