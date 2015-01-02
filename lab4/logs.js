/*
 *  ЗАДАНИЕ 2
        
        1. Создайте файл logs.js. 
        2. В файле logs.js:
                2.1. Создайте и опишите три ф-ции: warn, 
                info и error, которые принимают в качестве 
                аргумента строку и выводят её в консоль с 
                соотвествующим префиксом, например "Info: 
                какая-то строка" или "Error: какая-то строка" 
                2.2. Экспортируйте эти ф-ции как методы объекта
                2.3. Сохраните файл logs.js
        3. Сохраните данный файл
*/

var warn = function (warn) {
    console.log("warning: " + warn);
};

var info = function (info) {
    console.log("info: " + info);
};

var error = function (err) {
    console.log("err: " + err);
};

exports.warn = warn;
exports.info = info;
exports.error = error;

