const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];
function sumOfArray(arr) {
    let newAngka = 0;
    for (let i = 0; i < arr.length; i++) {
        newAngka += arr[i];
    }
    return newAngka;
}

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));


const avg1 = sumOfArray(arr1) / arr1.length
const avg2 = sumOfArray(arr2) / arr2.length
function countAboveAvg(arr, avg) {
    return arr.filter((i) => i > avg).length;
}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);


const arr = [1, 2, 3, 4, 5];
function searchInArray(arr, num) {
    let newArray = [].concat(...arr);
    if (newArray.includes(num)) {
        return "angka di temukan pada index:" + newArray.indexOf(num);
    } else return "angka tidak di temukan";
}

console.log(searchInArray(arr, 6));
console.log(searchInArray(arr, 1));
console.log(searchInArray(arr, 8));


function trianglePattern() {

}

const first = 5;
const second = 3;
const third = 2;

trianglePattern(first, first);
trianglePattern(second, second);
trianglePattern(third, third);
