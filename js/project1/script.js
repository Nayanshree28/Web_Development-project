let button1 = document.querySelector("button");
let heding = document.querySelector("h2");

const colors = ["Red", "Green", "Blue", "Yellow", "Purple", "Orange", "Pink", "Brown", "Black", 
               "White", "Gray", "Cyan", "Magenta", "Lime", "Indigo"];

const size = colors.length;
button1.addEventListener("click", ()=>{
     let num = Math.floor(Math.random() * size);
     document.body.style.backgroundColor = colors[num];
});

heding.addEventListener()