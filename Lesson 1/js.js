'use strict';

let celcium = +prompt("Введите температуру в цельсиях");
alert(9 / 5 * celcium + 32);

let name = 'Василий', admin;
admin = name;
console.log(admin);

console.log(10 + 10 + "10");
console.log('10 + 10 + "10": ' + (10 + 10 + "10") + ' - оператор сложения обрабатывается слева направа, сначала складываются числа и \
получается 20, а потом добавляется строка и число конвретируется в строку, после чего уже объединяются строки\n');

console.log(10 + "10" + 10);
console.log('10 + "10" + 10: ' + (10 + "10" + 10) + ' - обработка слева направо, сначала число складывается со строкой, при этом число \
переводится в строку, после этого полученная строка складывается с числом и опять число переводится в строку');

console.log(10 + 10 + + "10");
console.log('10 + 10 + +"10" :' + (10 + 10 + +"10") + ' - сначала обрабатывается унарный плюс, т.к. имеет бОльший приоритет и единственное \
строковое значение превращается в число, затем складываются только числа');

console.log('10 / -""');
console.log('10 / -"": ' + (10 / -"") + ' - сначала обрабатывается унарный минус имеющий наибольший приоритет, переводя пустую строку \
к отрицательному нулю, после чего деление на отрицательный ноль дает отрицательную бесконечность');

console.log(10 / +"2,5");
console.log('10 / +"2,5": ' + (10 / +"2,5") + ' - наиболее приоритетный унарный плюс пытается перевести строку в число, но найдя \
в строке запятую не может перевести в число и переводит в "нечисло" - NaN, Затем деление на NaN также дает NaN');

/*
  Назначение и отличия аттрибутов async и defer тега script:
    async - указывает браузеру загружать скрипт параллельно с парсингом страницы и приостановить парсинг для запуска скрипта,
            когда он будет загружен
    defer - указывает браузеру загружать скрипт парарллельно с парсингом и запустить его только после окончания парсинга страницы\

    Таким образом async может использовать тогда, когда нет зависимости от существования всех элементов на странице,
    а defer если скрипт зависит от существования всех элементов на странице.
*/


/* 
    Это лишь одни из многих реализаций поиска счастливого билетика. Проще конечно просто строку по символьно разобрать,
    но раз надо с использованием оператора %, то получилось так:
*/
let ticketNumber;

do {
    ticketNumber = prompt('Введите номер билета (6 цифр)');
} while (ticketNumber.length != 6 || parseInt(ticketNumber).toString().length > 6);

ticketNumber = parseInt(ticketNumber);

let rightHalf = 0, leftHalf = 0;

for (let i = 0; i < 6; i++) {
    let reminder = ticketNumber % 10;
    if (i < 3) {
        rightHalf += reminder;
    } else {
        leftHalf += reminder;
    }
    ticketNumber = (ticketNumber - reminder) / 10;
}

if (leftHalf === rightHalf) console.log("Ваш билетик счастливый!");