const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];
function reverse(arr) {
    let array = []
    for (let i = 0; i < arr.length; i++) {
        array.push(arr[i])
    }
    return array.reverse()
}

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);


const angka1 = [1, 3, 4, 1, 2, 8];
const angka2 = [5, 6, 7, 8, 1, 3];

function getAverage(arr) {
    const average = arr.reduce((a, b) => a + b) / arr.length;
    return arr.filter((i) => i > average).length;
}

console.log(getAverage(angka1))
console.log(getAverage(angka2))


const number = [
    [10],
    [9, 7, 1],
    [2, 8],
];

function searchInArray(arr, num) {
    let newArray = [].concat(...arr);
    if (newArray.includes(num)) {
        return newArray.indexOf(num);
    } else return null;
}

console.log(searchInArray(number, 3));
console.log(searchInArray(number, 2));
console.log(searchInArray(number, 4));
console.log(searchInArray(number, 8));
