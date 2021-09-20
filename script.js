const next = document.getElementById("right");
const prev = document.getElementById("left");
const imageConatiner = document.querySelector(".image-container");
const imgs = document.getElementById("imgs");
const img = document.querySelectorAll("#imgs img");

let idx = 0;
let interval = setInterval(run, 2000);

function run(){
    idx++;

    changeImage();
}

function changeImage(){
    if(idx === img.length){
        idx = 0
    } else if(idx < 0){
        idx = img.length -1;
    } 

    imgs.style.transform = `translateX(${-idx * 500}px)`;
}

function resetInterval(){
    clearInterval(interval);
    interval = setInterval(run, 2000);
}
next.addEventListener("click", ()=> {
    idx++;

    changeImage();
    resetInterval();
});

prev.addEventListener("click", ()=> {
    idx--;

    changeImage();
    resetInterval();
});
// prev.addEventListener("click", ()=> {
//     imageConatiner.style.transform = "translate(0)";
// });

