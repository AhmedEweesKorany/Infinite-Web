var cards = document.querySelectorAll(".product-box");

[...cards].forEach(element => {
    element.addEventListener("mouseover",function(){
        element.classList.add("is-hover");
    });
    element.addEventListener("mouseleave",function(){
        element.classList.remove("is-hover");
    });
});