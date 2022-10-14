//меню бургер ----------------------------------------------------------------------------------------
export function burger() {
    const menuBox = document.querySelector(".burgerMenuBox"); //обертка (черный фон)
    const menu = document.querySelector(".openBurgerMenu"); //окно с меню
    const liMenu = document.querySelectorAll(".menuLink"); //ссылки на страницы
    const cross = document.querySelector(".burgerClose"); //кнопка закрытия меню
    const burger = document.querySelector(".header__burger"); //кнопка открытия меню
    burger.addEventListener("click", () => {
        document.body.classList.add("_lock");
        menuBox.classList.add("_active");
    });
    cross.addEventListener("click", () => {
        document.body.classList.remove("_lock");
        menuBox.classList.remove("_active");
    });
    liMenu.forEach(element => {
        element.addEventListener("click", () => {
            document.body.classList.remove("_lock");
            menuBox.classList.remove("_active");
        });
    });
    menu.addEventListener("click", (e) => {
        e.stopPropagation(); //отменяет всплытие (отменяет выполнение ивента menuBox)
    });
    menuBox.addEventListener("click", () => {
        document.body.classList.remove("_lock");
        menuBox.classList.remove("_active");
    });
}
//--------------------------------------------------------------------------------------------------------------