let nav = document.querySelector(".nav");
let bar = document.querySelector(".bars"); // هنا يجب وضع فاصلة
let x = document.querySelector(".X");

bar.onclick = () =>{
    nav.classList.add("active"); 
} 

x.onclick = () => {
    nav.classList.remove("active");
}
