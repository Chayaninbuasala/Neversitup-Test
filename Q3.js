function isOod(array) {
    return array + " should return"+array.filter((num) => num % 2 == 0 )+", because it occurs "+array.filter((num) => num % 2 == 0 ).length +" times (which is odd)."
}

console.log(isOod([7]));
console.log(isOod([0]));
console.log(isOod([1,1,2]));
console.log(isOod([0,1,0,1,0]));
console.log(isOod([1,2,2,3,3,3,4,3,3,3,2,2,1]));