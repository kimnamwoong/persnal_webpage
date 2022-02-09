const menu_btn = document.querySelector(".nav_button");
const menu_items = document.querySelector(".nav_menu");
const icons = document.querySelector(".nav_icons");


function menu_btn_click(){
    menu_items.classList.toggle('active');
    icons.classList.toggle('active');
}
// 메뉴바 about me link 버튼 클릭시
function aboutLinkClicked(){
    document.querySelector(".skills").scrollIntoView(true);
}
// 메뉴바 contact me link 버튼 클릭시
function contactLinkClicked(){
    document.querySelector(".bottom-container").scrollIntoView(true);
}

menu_btn.addEventListener('click',menu_btn_click);