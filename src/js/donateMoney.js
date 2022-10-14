// модуль управления донатом ------------------------------------------------------------------
export function donate() {
    const donateRange5000 = document.querySelector('.input5000');
    const donateRange2000 = document.querySelector('.input2000');
    const donateRange500 = document.querySelector('.input500');
    const inputMoney = document.querySelector('.donation__inputMoney');

    donateRange5000.addEventListener('change', () => { // изменение значения в инпуте
        connectionRange(donateRange5000.value); // свзяывает 3 ренджа
        changeOrange(donateRange5000.value); // подсвечивает оранжевым выбранную сумму
        changeSum(donateRange5000.value); // меняет значение в инпуте
    });

    donateRange2000.addEventListener('change', () => {
        connectionRange(donateRange2000.value);
        changeOrange(donateRange2000.value);
        changeSum(donateRange2000.value);
    });

    donateRange500.addEventListener('change', () => {
        connectionRange(donateRange500.value);
        changeOrange(donateRange500.value);
        changeSum(donateRange500.value);
    });

    inputMoney.addEventListener('input', () => { // ввод значения в инпут
        inputMoney.value = inputMoney.value.substring(0, 4); // ограничивает ввод более 4 символов обрезая лишние
        onRange(inputMoney.value); // меняет значение на рендже
    });
}
// ---------------------------------------------------------------------------------------------

// выбор на одном рендже меняет значение на всех -----------------------------------------------
function connectionRange(value) {
    const donateRange = document.querySelectorAll('.donation__ranger');
    donateRange.forEach(el => el.classList.remove('_hide')); // отключает скрытие ползунка на всех ренджах
    const donateRange5000 = document.querySelector('.input5000');
    const donateRange2000 = document.querySelector('.input2000');
    const donateRange500 = document.querySelector('.input500');
    donateRange5000.value = value;
    donateRange2000.value = value;
    donateRange500.value = value;

    // скрывает ползунок на ренджах где нету соотвествующей суммы
    if (value === '6') donateRange500.classList.add('_hide');
    if (value === '7') donateRange500.classList.add('_hide');
    if (value === '8') donateRange500.classList.add('_hide'), donateRange2000.classList.add('_hide');
}
// ---------------------------------------------------------------------------------------------

// убираем оранжевый модификатор со всех сумм --------------------------------------------------
function disableOrange() {
    const moneySum25 = document.querySelector('.donation__m25');
    const moneySum50 = document.querySelector('.donation__m50');
    const moneySum100 = document.querySelector('.donation__m100');
    const moneySum250 = document.querySelector('.donation__m250');
    const moneySum500 = document.querySelector('.donation__m500');
    const moneySum1000 = document.querySelector('.donation__m1000');
    const moneySum2000 = document.querySelector('.donation__m2000');
    const moneySum5000 = document.querySelector('.donation__m5000');

    moneySum25.classList.remove("_orange");
    moneySum50.classList.remove("_orange");
    moneySum100.classList.remove("_orange");
    moneySum250.classList.remove("_orange");
    moneySum500.classList.remove("_orange");
    moneySum1000.classList.remove("_orange");
    moneySum2000.classList.remove("_orange");
    moneySum5000.classList.remove("_orange");
}
// ---------------------------------------------------------------------------------------------

// подсветка суммы -----------------------------------------------------------------------------
function changeOrange(value) {
    const moneySum25 = document.querySelector('.donation__m25');
    const moneySum50 = document.querySelector('.donation__m50');
    const moneySum100 = document.querySelector('.donation__m100');
    const moneySum250 = document.querySelector('.donation__m250');
    const moneySum500 = document.querySelector('.donation__m500');
    const moneySum1000 = document.querySelector('.donation__m1000');
    const moneySum2000 = document.querySelector('.donation__m2000');
    const moneySum5000 = document.querySelector('.donation__m5000');

    disableOrange(); // убираем оранжевый модификатор со всех сумм
    if (value === '1') moneySum25.classList.add("_orange"); // добавляем оранжевый модификатор выбранной сумме
    if (value === '2') moneySum50.classList.add("_orange");
    if (value === '3') moneySum100.classList.add("_orange");
    if (value === '4') moneySum250.classList.add("_orange");
    if (value === '5') moneySum500.classList.add("_orange");
    if (value === '6') moneySum1000.classList.add("_orange");
    if (value === '7') moneySum2000.classList.add("_orange");
    if (value === '8') moneySum5000.classList.add("_orange");
}
// ---------------------------------------------------------------------------------------------

// меняет сумму в инпуте -----------------------------------------------------------------------
function changeSum(value) {
    const inputMoney = document.querySelector('.donation__inputMoney');
    if (value === '1') inputMoney.value = 25;
    if (value === '2') inputMoney.value = 50;
    if (value === '3') inputMoney.value = 100;
    if (value === '4') inputMoney.value = 250;
    if (value === '5') inputMoney.value = 500;
    if (value === '6') inputMoney.value = 1000;
    if (value === '7') inputMoney.value = 2000;
    if (value === '8') inputMoney.value = 5000;
}
// ---------------------------------------------------------------------------------------------

// меняет значение на рендже -------------------------------------------------------------------
function onRange(value) {
    const donateRange = document.querySelectorAll('.donation__ranger');
    donateRange.forEach(el => el.classList.add('_hide')); // скрывает ползунок на всех ренджах
    disableOrange(); // убираем оранжевый модификатор со всех сумм
    if (value === '25') connectionRange('1'), changeOrange('1');
    if (value === '50') connectionRange('2'), changeOrange('2');
    if (value === '100') connectionRange('3'), changeOrange('3');
    if (value === '250') connectionRange('4'), changeOrange('4');
    if (value === '500') connectionRange('5'), changeOrange('5');
    if (value === '1000') connectionRange('6'), changeOrange('6');
    if (value === '2000') connectionRange('7'), changeOrange('7');
    if (value === '5000') connectionRange('8'), changeOrange('8');
}
// ---------------------------------------------------------------------------------------------