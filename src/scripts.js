// ИСПРАВЛЕНИЕ ВЫСОТЫ vh НА МОБИЛЬНЫХ УСТРОЙСТВАХ ИЗЗА НАВИГАЦИОННОЙ ПЛАШКИ

// Сначала мы получаем высоту области просмотра и умножаем ее на 1%, чтобы получить значение для единицы vh.
let vh = window.innerHeight * 0.01;
// Затем мы устанавливаем значение в пользовательском свойстве --vh в корень документа.
document.documentElement.style.setProperty('--vh', `${vh}px`);
// Слушаем событие resize
// window.addEventListener('resize', () => {
// 	// Выполняем тот же скрипт, что и раньше
// 	let vh = window.innerHeight * 0.01;
// 	document.documentElement.style.setProperty('--vh', `${vh}px`);
// });
// В css задать нашему блоку высоту
// height: 100vh; /* Резервный вариант для браузеров, не поддерживающих пользовательские свойства */
// height: calc(var(--vh, 1vh) * 100);


