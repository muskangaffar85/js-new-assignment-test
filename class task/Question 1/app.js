function reverseArray(arr) {
   
    let start = 0;
    let end = arr.length - 1;
   
    while (start < end) {
       
        [arr[start], arr[end]] = [arr[end], arr[start]];
       
        start++;
        end--;
    }
    
    return arr;
}


let arraySmall = [1, 2, 3, 4, 5];
console.log("Original array:", arraySmall);
console.log("Reversed array:", reverseArray(arraySmall.slice())); 

let arrayLarge = [10, 20, 30, 40, 50, 60, 70, 80, 90];
console.log("\nOriginal array:", arrayLarge);
console.log("Reversed array:", reverseArray(arrayLarge.slice())); 

