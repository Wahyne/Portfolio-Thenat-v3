AOS.init();
const menu = document.querySelector(".header__list");
const btn_menu = document.querySelector(".header__humbger");

btn_menu.addEventListener("click", () => {
    btn_menu.classList.toggle("active");
    menu.classList.toggle("active")
})

var header_js = document.querySelector(".js-header");

window.addEventListener("scroll", () => {
    if (this.scrollY > 0) {
        header_js.classList.add("active");
    } else {
        header_js.classList.remove("active");
    }
})
