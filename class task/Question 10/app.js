function findIndexInForLoop(arr, targetItem) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === targetItem) {
            return i; 
        }
    }
    return -1;
}


let array = [20, 30, 10, 50, 40];
let target = 30;
let index = findIndexInForLoop(array, target);

if (index !== -1) {
    console.log(`The index of ${target} in the array is ${index}`);
} else {
    console.log(`${target} not found in the array`);
}