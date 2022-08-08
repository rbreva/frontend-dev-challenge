
const menu_open = document.querySelector('.menu_open');
const search_open = document.querySelector('.search_open');
const menu_close = document.querySelector('.menu_close');
//console.log(menu_open);
//console.log(menu_close);

cargarEventListeners();

function cargarEventListeners() {
    menu_close.addEventListener("click", cierraMenu);
    menu_open.addEventListener("click", abreMenu);
    search_open.addEventListener("click", abreMenu);
}

function cierraMenu() {
  //console.log("click cierra");
  let menu = document.querySelector('.menunav');
  menu.className = "menunav close"
}

function abreMenu() {
    //console.log("click cierra");
    let menu = document.querySelector('.menunav');
    menu.className = "menunav open"
}

