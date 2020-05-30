/*отключить мигание конверта после клика*/
$(document).ready(function() {
  $("#newMessage").click(function() {
    $("#newMessage").removeClass("messagebox1");
  });
});

      'use strict';

        var link2 = document.querySelector('#newMessage');
        var popup2 = document.querySelector('.popup-consultation__message');
        var close2 = popup2.querySelector('.message__close');
        var overlay2 = document.querySelector('.modal-content__message');



        link2.addEventListener('click', function(event) {
            event.preventDefault();
            popup2.classList.add('modal-content__login-show2');
            overlay2.classList.add('modal-content__overlay-show2');
            
        });

        close2.addEventListener('click', function(event) {
            event.preventDefault();
            popup2.classList.remove('modal-content__login-show2');
            popup2.classList.remove('modal-error');
            overlay2.classList.remove('modal-content__overlay-show2');
        });


        window.addEventListener('keydown', function(event) {
            if (event.keyCode === 27) {
                if (popup2.classList.contains('modal-content__login-show2')) {
                popup2.classList.remove('modal-content__login-show2');
                popup2.classList.remove('modal-error');
                overlay2.classList.remove('modal-content__overlay-show2');
                }
            }
        })
