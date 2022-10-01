const body = document.body;
const square = body.querySelector(".square");
const link = square.querySelector(".btn");

square.style.backgroundColor = getColor(30, 0, 200);

function changeBg(el) {
    el.style.backgroundColor = getColor(70, 256, 0, 256);
}
let n = 0;
square.onclick = function() {
    n++;
    this.innerHTML = link.outerHTML + `Clicked ${n} times`;
}