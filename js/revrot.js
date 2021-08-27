// If
// sz is <= 0 or if str is empty return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
function revrot(str, sz) {
  if (sz <= 0 || sz === "") {
    return "";
  } else if (sz > str.length) {
    return "";
  } else {
    let last = str.length;
    let firstChunk = str.split("").slice(0, sz);
    let lastChunk = str.split("").slice(sz, last);
    let firstCheck = revCheck(firstChunk);
    let secondCheck = revCheck(lastChunk);
    return firstCheck.concat(secondCheck).join("");
  }
}
function revCheck(c) {
  let startNum = 0;
  for (i = 0; i < c.length; i++) {
    startNum += Number(c[i]);
  }
  if (startNum % 2 === 0) {
    return reverseNum(c);
  } else {
    let newArr = c;
    let firstItem = newArr.shift();
    return newArr.concat(firstItem);
  }
}
function reverseNum(n) {
  return n.sort((a, b) => b - a);
}

console.log(revrot("123456987654", 6));
