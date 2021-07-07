/* Напишите функцию, которая создает пустой объект, но без прототипа. */

function a() {
    const obj = Object.create(null);
    return obj;
}

const outObj = a();
console.log(Object.getPrototypeOf(outObj));