"use strict"
{
    const nav = document.querySelector(".nav");
    const headerList = document.querySelector(".header-list");

    window.addEventListener("scroll", () => {
        console.log(window.scrollY)
        if (window.scrollY >= 150) {
            nav.classList.add("sticky");
        } else {
            nav.classList.remove("sticky");
        }
    });
}