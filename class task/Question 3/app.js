function countVowels(str) {
    
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    
   
    let vowelCount = 0;
    
    
    for (let char of str) {
        
        if (vowels.has(char)) {
            vowelCount++;
        }
    }
    
    return vowelCount;
}


let str1 = "Hello World";
console.log(`Number of vowels in "${str1}":`, countVowels(str1));

let str2 = "This is a test vowel words";
console.log(`Number of vowels in "${str2}":`, countVowels(str2));

let str3 = "JavaScript is awesome";
console.log(`Number of vowels in "${str3}":`, countVowels(str3));