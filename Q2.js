export function getPermutations(input) {
  let result = [];

  function permute(arr, current) {
    if (arr.length === 0) {
      result.push(current);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      let remaining = arr.slice(0, i).concat(arr.slice(i + 1));
      permute(remaining, current + arr[i]);
    }
  }

  permute(input.split(''), '');

  let uniqueResult = removeDuplicates(result);

  return uniqueResult;
}


function removeDuplicates(arr) {
  let uniqueArray = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }

  return uniqueArray;
}