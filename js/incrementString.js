// return incrementedString
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
function incrementString(strng) {
  const string = strng.replace(/[0-9]/g, "");
  const len = strng.length - string.length;
  let num = strng.slice(string.length) || "0";

  num = (parseInt(num) + 1).toString();

  while (num.length < len) {
    num = "0" + num;
  }

  return string.concat(num);
}
console.log(incrementString("foobar001"));
