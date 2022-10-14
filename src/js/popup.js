export function popup() {
    const popupBox = document.querySelector('.popupBox'); //обертка (черный фон)
    const cardBox = document.querySelector('.cardBox'); // белое окно
    const cross = document.querySelector(".cross"); //кнопка закрытия
    const testimonialsBox = document.querySelectorAll('.testimonials__box'); //массив карточек

    testimonialsBox.forEach(card => { // нажатие на карточку
        card.addEventListener('click', (event) => {
            if (window.innerWidth < 1000) { // проверка ширины экрана меньше 1000p
                document.body.classList.add("_lock"); //блокирует скролл страницы
                popupBox.classList.add("_active"); // делает активным поп-ап
                const currentCard = event.target.closest('.testimonials__box') // находит карточку на котрую нажали
                document.querySelector('.cardBord__comment').textContent = currentCard.children[1].textContent;
                document.querySelector('.cardBord__userName').textContent = currentCard.children[0].children[1].children[0].textContent;
                document.querySelector('.cardBord__userLocal').textContent = currentCard.children[0].children[1].children[1].textContent;
                const style = window.getComputedStyle(currentCard.children[0].children[0], false);
                const bi = style.backgroundImage.slice(4, -1).replace(/"/g, ""); //получаем ссылку на иконку аватарки
                document.querySelector('.cardBord__userIcon').style.background = `url(${bi})`; //подставляем новую иконку
            };
        })
    })

    cross.addEventListener("click", () => {
        document.body.classList.remove("_lock");
        popupBox.classList.remove("_active");
    });
    popupBox.addEventListener("click", () => {
        document.body.classList.remove("_lock");
        popupBox.classList.remove("_active");
    });
    cardBox.addEventListener("click", (e) => { // нажатие на белое коно
        e.stopPropagation(); //отменяет всплытие (отменяет выполнение ивента popupBox)
    });
}