const person = {
    name: "Anton",
    age: 28
}

function outObject(obj) {
    console.log(Object.keys(obj));
    console.log(Object.values(obj));
}

outObject(person);