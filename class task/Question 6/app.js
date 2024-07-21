function getMinMappedValue(arr, mapFunc) {
   
    const mappedArray = arr.map(mapFunc);
    
    
    const minValue = Math.min(...mappedArray);
    
    return minValue;
}


const numbers = [5, 7, 8 , 1 , 2];
const square = x => x * x; 


/*Get the minimum squared value from the numbers array */

const minSquaredValue = getMinMappedValue(numbers, square);
console.log("Minimum squared value:", minSquaredValue);  