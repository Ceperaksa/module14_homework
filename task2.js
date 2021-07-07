/* Напишите функцию, которая принимает в качестве аргументов строку 
и объект, а затем проверяет, есть ли у переданного объекта свойство 
с данным именем. Функция должна возвращать true или false. */

function searchArg(ArgName, Object){
    for (let key in Object) {
        if (Object.hasOwnProperty(ArgName)){
            return true;
        }
    }
    return false;
}

let checkObj = {
    name: "123",
}

console.log(searchArg('name',checkObj));
console.log(searchArg('name2',checkObj));