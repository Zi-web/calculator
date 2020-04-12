/*new Vivus('my-svg1', { // для одного svg
	duration: 200,
	type: 'sync'
});*/


"use strict";
function isOnVisibleSpace(element) {
  var bodyHeight = window.innerHeight;
  var elemRect = element.getBoundingClientRect();
  var offset = elemRect.top; // - bodyRect.top;

  if (offset < 0) return false;
  if (offset > bodyHeight) return false;
  return true;
} // глобальный объект с элементами, для которых отслеживаем их положение в зоне видимости

var listenedElements = []; // обработчик события прокрутки экрана. Проверяет все элементы добавленные в listenedElements
// на предмет попадания(выпадения) в зону видимости

window.onscroll = function() {
  listenedElements.forEach(function(item) {
    // проверяем находится ли элемент в зоне видимости
    var result = isOnVisibleSpace(item.el); // если элемент находился в зоне видимости и вышел из нее
    // вызываем обработчик выпадения из зоны видимости

    if (item.el.isOnVisibleSpace && !result) {
      item.el.isOnVisibleSpace = false;
      item.outVisibleSpace(item.el);
      return;
    } // если элемент находился вне зоны видимости и вошел в нее
    // вызываем обработчик попадания в зону видимости

    if (!item.el.isOnVisibleSpace && result) {
      item.el.isOnVisibleSpace = true;
      item.inVisibleSpace(item.el);
      return;
    }
  });
}; // функция устанавливает обработчики событий
// появления элемента в зоне видимости и
// выхода из нее

function onVisibleSpaceListener(elementId, cbIn, cbOut) {
  // получаем ссылку на объект элемента
  var el = document.getElementById("delivery"); // добавляем элемент и обработчики событий
  // в массив отслеживаемых элементов

  listenedElements.push({
    el: el,
    inVisibleSpace: cbIn,
    outVisibleSpace: cbOut
  });
} // устанавливаем обработчики для элемента "video"

onVisibleSpaceListener(
  "delivery",
  function(el) {
    // функция вызываемая при попадании элемента в зону видимости
    // тут вставляем код запуска анимации
   
    var animate = ["my-svg1", "my-svg2", "my-svg3"];
	animate.forEach(function(svgId) {
	  return new Vivus(svgId, {
	    type: "async",
	    duration: 100
	  });
	});

  },
  function(el) {
    // функция вызываемая при выпадении элемента из зоны видимости
    // тут вставляем код остановки анимации
  }
);
