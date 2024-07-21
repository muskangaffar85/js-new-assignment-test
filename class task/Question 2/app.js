function filterOutNegatives(arr) {
    
    let filteredArray = arr.filter(num => num >= 0);
    return filteredArray;
}


let array = [1, -2, 3, -4, 5, -6, 7, -8, 9];
console.log("Original array:", array);
console.log("Array with negatives filtered out:", filterOutNegatives(array));