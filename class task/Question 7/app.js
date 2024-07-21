function createUpdatedString(originalString) {
    if (originalString.length < 3) {
        return "String length must be 3 and above.";
    }

    
    let lastThreeChars = originalString.slice(-3);

    
    let updatedString = lastThreeChars.repeat(4);

    return updatedString;
}


let originalString = "Javascript";
let updatedString = createUpdatedString(originalString);
console.log(updatedString); 