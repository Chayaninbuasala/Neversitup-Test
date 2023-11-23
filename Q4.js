function checkSmileys(arr) {
    const findSmile = arr.join('').match(/[:;][-~]?[D)]/g);
    return findSmile;
  }

console.log(checkSmileys([':)', ';(', ';}', ':-D']))  
console.log(checkSmileys([';D', ':-(', ':-)', ';~)']))
console.log(checkSmileys([';]', ':[', ';*', ':$', ';-D']))