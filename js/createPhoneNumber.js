function createPhoneNumber(numbers) {
  return numbers
    .join()
    .replace(/,/g, "")
    .split("", numbers.length)
    .map((x, i) => {
      if (i === 0) {
        return `(${x}`;
      }
      if (i === 2) {
        return (x += ") ");
      }
      if (i === 5) {
        return (x += "-");
      }

      return x;
    })
    .join("");
}
