function shufflings(inputStr) {

for (const iterator of inputStr) {
    console.log(iterator);
}
    
 return inputStr.split('')



}

// Test cases
console.log(shufflings('a'));    // Output: ['a']
console.log(shufflings('ab'));   // Output: ['ab', 'ba']
console.log(shufflings('abc'));  // Output: ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
console.log(shufflings('aabb')); // Output: ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']