export function petsSlider() {
    const btnL = document.querySelector('.favorite__btnL'); //кнопка влево
    const btnR = document.querySelector('.favorite__btnR'); //кнопка вправо
    btnL.addEventListener('click', clickLeft);
    btnR.addEventListener('click', clickRight);
}

function clickLeft() {
    const btnL = document.querySelector('.favorite__btnL'); //кнопка влево
    btnL.removeEventListener('click', clickLeft) //удаляем слушатель с кнопки

    const boxList = document.querySelector('.favorite__boxList'); //лист с карточками
    const sliderRow = document.querySelector('.favorite__sliderRow'); //ряд карточек
    const newBoxList = cloneRandomChild(boxList); //дубликат карточки
    newBoxList.classList.add('_right');
    boxList.classList.add('_left'); //добавляем класс базовой карточке (сдвигаем ее)
    setTimeout(() => {
        boxList.remove(); //удаляем базовую карточку
        sliderRow.prepend(newBoxList); //вставляем карточку полсе текущей
    }, 300);
    setTimeout(() => {
        newBoxList.classList.remove('_right');
    }, 320);
    setTimeout(() => {
        btnL.addEventListener('click', clickLeft) //возвращаем слушатель
    }, 1000);
}

function clickRight() {
    const btnR = document.querySelector('.favorite__btnR'); //кнопка вправо
    btnR.removeEventListener('click', clickRight) //удаляем слушатель с кнопки

    const boxList = document.querySelector('.favorite__boxList'); //лист с карточками
    const sliderRow = document.querySelector('.favorite__sliderRow'); //ряд карточек
    const newBoxList = cloneRandomChild(boxList); //дубликат карточки
    newBoxList.classList.remove('_center');
    boxList.classList.add('_right'); //добавляем класс базовой карточке (сдвигаем ее)
    setTimeout(() => { //задержка 1 секунда
        boxList.remove(); //удаляем базовую карточку
        sliderRow.append(newBoxList); //вставляем карточку полсе текущей
    }, 300);
    setTimeout(() => { //задержка 1 секунда
        newBoxList.classList.add('_center');
    }, 320);
    setTimeout(() => {
        btnR.addEventListener('click', clickRight) //возвращаем слушатель
    }, 1000);
}

//возвращает дубликат узла с потомками в случайном порядке
function cloneRandomChild(parent) {
    const dupParentWork = parent.cloneNode(true); //временный дубликат узла
    const dupParent = parent.cloneNode(true); //дубликат узла для заполнение
    while (dupParent.firstChild) dupParent.removeChild(dupParent.firstChild); //очистить дубликат
    while (dupParentWork.children.length) { // заполняем дубликат в случайном порядке
        dupParent.appendChild(dupParentWork.children[Math.floor(Math.random() * dupParentWork.children.length)]);
    }
    return dupParent;
}
