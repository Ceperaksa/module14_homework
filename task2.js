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