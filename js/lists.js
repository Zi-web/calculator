let list = document.querySelector('.todo-list');
let input = document.querySelector('.todo-input');
let form = document.querySelector('.todo-form');
let priority = document.querySelector('.todo-priority');
let butt = document.querySelector('.todo-add');

priority.onclick = function () {
  priority.classList.toggle('is-important');
  if (priority.classList.contains('is-important')) {
    priority.textContent = 'Важная задача';
  } else {
    priority.textContent = 'Обычная задача';
  }
};

butt.onclick = function (evt) {
  evt.preventDefault();
  let newElement = document.createElement('li');
  list.append(newElement);
  newElement.textContent = input.value;
  input.value = '';
  if (priority.classList.contains('is-important')) {
    newElement.classList.add('is-important');
  } 
};



/*form.onsubmit = function (evt) {
  evt.preventDefault();
  let newElement = document.createElement('li');
  list.append(newElement);
  newElement.textContent = input.value;
  input.value = '';
  if (priority.classList.contains('is-important')) {
    newElement.classList.add('is-important');
  } 
};*/

/*
1. Каждая задача в списке — это элемент li. При отправке формы (переменная form) новая задача добавляется в конец списка (переменная list).
2. Текст задачи берётся из поля ввода (переменная input).

3. Если у переключателя приоритета (переменная priority) есть класс is-important, то новой задаче также добавляется класс is-important.

4. Бонус: после того, как задача добавится в список, поле ввода можно очистить. Но можно не очищать. Подходят оба варианта.
*/
