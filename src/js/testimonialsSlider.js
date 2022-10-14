export function testimonialsSlider() {
    const inputLine = document.querySelector('.testimonials__line');
    inputLine.addEventListener("input", () => { // передвигая слайдер
        const cWidth = window.innerWidth; //ширина экрана
        if (cWidth > 1599) slide1600();
        if (cWidth >= 1000 && cWidth <= 1599) slide1000();
    })
    window.addEventListener("resize", () => { // изменяя ширину страници возвращает слайдер в дефолтное состояние
        const inputLine = document.querySelector('.testimonials__line');
        const sliderRow = document.querySelector('.testimonials__row');
        inputLine.value = '0'; 
        sliderRow.style.marginLeft = '0px';
    })
}

function slide1600() {
    const inputLine = document.querySelector('.testimonials__line');
    const sliderRow = document.querySelector('.testimonials__row');
    if (inputLine.value === '0') sliderRow.style.marginLeft = '0px';
    if (inputLine.value === '1') sliderRow.style.marginLeft = '-295px';
    if (inputLine.value === '2') sliderRow.style.marginLeft = '-590px';
    if (inputLine.value === '3') sliderRow.style.marginLeft = '-885px';
    if (inputLine.value === '4') sliderRow.style.marginLeft = '-1180px';
    if (inputLine.value === '5') sliderRow.style.marginLeft = '-1475px';
    if (inputLine.value === '6') sliderRow.style.marginLeft = '-1770px';
    if (inputLine.value === '7') sliderRow.style.marginLeft = '-2065px';
}

function slide1000() {
    const inputLine = document.querySelector('.testimonials__line');
    const sliderRow = document.querySelector('.testimonials__row');
    if (inputLine.value === '0') sliderRow.style.marginLeft = '0px';
    if (inputLine.value === '1') sliderRow.style.marginLeft = '-320px';
    if (inputLine.value === '2') sliderRow.style.marginLeft = '-640px';
    if (inputLine.value === '3') sliderRow.style.marginLeft = '-960px';
    if (inputLine.value === '4') sliderRow.style.marginLeft = '-1280px';
    if (inputLine.value === '5') sliderRow.style.marginLeft = '-1600px';
    if (inputLine.value === '6') sliderRow.style.marginLeft = '-1920px';
    if (inputLine.value === '7') sliderRow.style.marginLeft = '-2240px';
}