function smallestRoundNumber(value) {
   
    if (value % 10 === 0) {
        return value;
    } else {

        return Math.ceil(value / 10) * 10;
    }
}


let inputValue = 592;
let smallestRound = smallestRoundNumber(inputValue);
console.log(`The smallest round number not less than ${inputValue} is ${smallestRound}`);