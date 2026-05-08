// Создать файл script.js рядом с index.html. Подключить тегом <script> в конце body.+

// Написать console.log("Мой первый JS!"). Обновить браузер. Найти сообщение в консоли.

console.log('Мой первый JS code!');

// Вывести несколько строк: своё имя, возраст, любимый цвет. Убедиться — все три видны в консоли.

console.warn('Abdurahmon', 21, 'BLACK');

console.log("Имя: Абдурахмон")
console.log("Возраст: 21")
console.log("Цвет: чёрный")

// Сделать намеренную ошибку — опечатка в console.log. Прочитать сообщение об ошибке вместе. Исправить.
console.log("\x1b[31m%s\x1b[0m", "This is red text!");

// Вывести результат математики: console.log(2024 - 1990) — JS как калькулятор.
console.log("Мой возраст:", 2026 - 2005, 'лет');

// Написать первый alert() — браузер показывает диалог. Сравнить с console.log.
//alert("Добро пожаловать!")


//Vazifa

//Моя визитка
console.log("Имя: Абдурахмон")
console.log("Возраст: 21")
console.log("Город: Худжанд")
console.log("Любимый язык программирования: JavaScript")

//Сколько дней живу
console.log(21 * 365)


//Приветствие и вопрос
//0alert("Привет! Добро пожаловать в JavaScript!");
//let isReady = confirm("Готов учиться?");



// 1. Создание переменных
const name = "Abdurahmon";
let age = 21;
const city = "Khujand";
let isOnline = true;


// 2. Вывод переменных отдельно
console.log(name);
console.log(age);
console.log(city);
console.log(isOnline);


// Проверка типов
console.log(typeof name);
console.log(typeof age);
console.log(typeof city);
console.log(typeof isOnline);


// 3. Красивый вывод через шаблонную строку
console.log(`Имя: ${name}, Возраст: ${age}, Город: ${city}`);


// 4. Изменение let переменных
age = 21;
isOnline = false;

console.log(age);
console.log(isOnline);


// Попытка изменить const переменную
// name = "Ali"; // Ошибка! const нельзя изменять


// 5. Вычисление года рождения
console.log(`Год рождения: ${new Date().getFullYear() - age}`);