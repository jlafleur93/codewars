function findOutlier(integers) {
  let evenNum = 0;
  let oddNum = 0;
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      evenNum++;
    } else {
      oddNum++;
    }
  }
  if (evenNum >= oddNum) {
    return integers.filter((x) => x % 2).sort((a, b) => a - b)[0];
  } else {
    return integers.filter((x) => x % 2 === 0).sort((a, b) => a - b)[0];
  }
}

console.log(findOutlier([1, 2, 3]));
console.log(findOutlier([2, 3, 4]));
