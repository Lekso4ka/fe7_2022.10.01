const body = document.body;
const square = body.querySelector(".square");
const link = square.querySelector(".btn");

square.style.backgroundColor = getColor(30, 0, 200);

function changeBg(el) {
    el.style.backgroundColor = getColor(70, 256, 0, 256);
}
let n = 0;
// square.onclick = function() {
//     n++;
//     this.innerHTML = link.outerHTML + `Clicked ${n} times`;
// }

square.addEventListener("click", function(e) {
    n++;
    e.stopPropagation();
    let span = document.createElement("span");
    span.innerText = `Clicked ${n} times`;
    // this.innerHTML = link.outerHTML + `Clicked ${n} times`;
    this.innerHTML = "";
    this.append(link, span);
    // console.log(link.parentElement);
});
square.addEventListener("click", function(e) {
    // console.log(e);
    changeBg(this); // e.target - тот, кто вызвал событие
});

link.addEventListener("click", e => {
    // e.stopPropagation();
    e.preventDefault(); // отменить действия, заданные для тега по умолчанию
    e.target.style.border = `2px solid ${getColor()}`;
});

body.addEventListener("click", function() {
    this.style.backgroundColor = getColor();
})