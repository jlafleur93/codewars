function isPrime(num) {
  if (num <= 1) {
    return false;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}
console.log(isPrime(0)); /* false */
console.log(isPrime(2)); /* true  */
console.log(isPrime(-1)); /* false */
console.log(isPrime(13));
