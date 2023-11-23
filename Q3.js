function isOod(array) {
    let isOods = array.filter((num) => num % 2 == 0 )
    if (isOods.length > 0 && isOods.some((num) => num !== 0)) {
        return array + " should return " + numberToArray(Math.max(...isOods)).filter((num) => num % 2 === 0) + ", because it occurs " + numberToArray(Math.max(...isOods)).filter((num) => num % 2 === 0).length + " times (which is odd).";
      } else {
        return array + " should return " + array.filter((num) => num % 2 === 0) + ", because it occurs " + array.filter((num) => num % 2 === 0).length + " times (which is odd).";
      }
      
}

function numberToArray(number) {
    // Convert number to string and split it into an array of characters
    const digitsArray = String(number).split('').map(Number);

    return digitsArray;
}
console.log(isOod([7]));
console.log(isOod([0]));
console.log(isOod([1,1,2]));
console.log(isOod([0,1,0,1,0]));
console.log(isOod([1,2,2,3,3,3,4,3,3,3,2,2,1]));