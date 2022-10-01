/*
    q 4.6
*/

document.querySelector("#square").onclick = function() {
    this.style.opacity = "0";
}

/*
    q 4.7
*/

const button = document.querySelector(".copy");

button.addEventListener("click", (e) => {
    let newTag = e.target.cloneNode(true);
    document.body.appendChild(newTag);
});

/* баго-версия */

let btns = document.getElementsByClassName("copy");
function updEvents() {
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", (e) => {
            let newTag = e.target.cloneNode(true);
            document.body.appendChild(newTag);
            updEvents();
        }, {once: true});
    }
}

updEvents();

/*
    q 4.9
*/

const left = document.querySelector("#div1");
const right = document.querySelector("#div2");

let elements = document.querySelectorAll("#div1 p, #div2 p");

for (let i = 0, cnt = elements.length; i < cnt; i++) {
    const el = elements[i];
    el.addEventListener("click", e => {
        e.stopPropagation();
        const daddy = e.target.parentElement;
        console.log(daddy);
        daddy === left ? right.append(e.target) : left.append(e.target); 
    })
}