document.querySelector('#main').addEventListener('mousemove', e => {
    call.style.left = e.offsetX + 10 + "px";
    call.style.top = e.offsetY - 60 + "px";
    console.log(e);
});

/*
document.querySelector('#call1').onmousemove = function(event) {
    event = event || window.event;
  addEventListener('mousemove', e => {
    call.style.left = e.offsetX - 10 + "px";
    call.style.top = e.offsetY - 60 + "px";
    console.log(event);
});
}
*/