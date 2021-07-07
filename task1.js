/* Напишите функцию, которая принимает в качестве аргумента
объект и выводит в консоль все ключи и значения только
собственных свойств. Данная функция не должна возвращать значение. */

const person = {
    name: "Anton",
    age: 28
}

function outObject(obj) {
    console.log(Object.keys(obj));
    console.log(Object.values(obj));
}

outObject(person);