function isPalindrome(str) {
   
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    return cleanedStr === reversedStr;
}


console.log(isPalindrome("kayak"));  
console.log(isPalindrome("mom"));    
console.log(isPalindrome("radar"));   
console.log(isPalindrome("refer"));  
console.log(isPalindrome("Hello"));   
console.log(isPalindrome("A man, a plan, Panama!"));  
console.log(isPalindrome("Was it a cat or a car I saw?"));    