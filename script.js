let count = Number(document.querySelector(".count").innerText);
let span = document.querySelector("span");
const increment = document.querySelector(".increase");
const decrement = document.querySelector(".decrease");
const reset = document.querySelector(".reset");


increment.addEventListener("click", function(){
    count ++;
    span.innerText = count;
});

decrement.addEventListener("click", function(){
    count--;
    span.innerText = count;
});

reset.addEventListener("click", function(){
    span.innerText = 0;
});

