window.onload = function() {
    const menu_btn = document.querySelector('.hamburger');
    const nav_menu = document.querySelector('.nav')
    menu_btn.addEventListener('click', function(){
        menu_btn.classList.toggle('is-active');
        nav_menu.classList.toggle('is-active');

    });
}
