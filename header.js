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

  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

}
