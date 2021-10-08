const obj1 = {
    key0: false,
    key1: 'val1',
    key2: 20,
    key3: [0, 1, 2],
    key4: {name: 'mohammad'},
}
const obj2 = {
    key0: false,
    key1: 'val1',
    key2: 20,
    key3: [0, 1, 2],
    key4: {name: 'mohammad'},
}
const obj3 = {
    key0: false,
    key1: 'val1',
    key2: 10,
    key3: [0],
}
const obj4 = {
    key0: false,
    key1: 'val1',
    key2: 20,
    key3: [1],
    key4: {},
}
function isEqual(a,b){
    if ((Object.values(a) === Object.values(b))&&(Object.keys(a) === Object.keys(b))){
        return "true"
    }return "false"
}
function isSame(a,b){
    if (Object.entries(a) === Object.entries(b)){
        return "true"
    }return "false"
}

console.log(isEqual([obj1],[obj1]))
console.log(isSame([obj1],[obj1]))