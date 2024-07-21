function angleType(angle) {
    if (angle > 0 && angle < 90) {
        return "Acute Angle";
    } else if (angle === 90) {
        return "Right Angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse Angle";
    } else if (angle === 180) {
        return "Straight Angle";
    } else {
        return "Angle not within valid range (0 to 180 degrees).";
    }
}


console.log(angleType(45));   // Output: "Acute Angle"
console.log(angleType(90));   // Output: "Right Angle"
console.log(angleType(120));  // Output: "Obtuse Angle"
console.log(angleType(180));  // Output: "Straight Angle"
console.log(angleType(200));  // Output: "Angle not within valid range (0 to 180 degrees).