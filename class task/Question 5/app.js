function isInRange50to99(num1, num2) {
     
    return (num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99);
}

console.log(isInRange50to99(45, 55));   
console.log(isInRange50to99(60, 100));  
console.log(isInRange50to99(30, 40));   
console.log(isInRange50to99(80, 90));   
console.log(isInRange50to99(99, 101));  