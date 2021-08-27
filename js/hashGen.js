// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

function generateHashtag(str) {
  if (str === "") {
    return false;
  } else if (str.length >= 140) {
    return false;
  } else {
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return "#" + arr.join("");
  }
}
console.log(generateHashtag("CodeWars"));
console.log(generateHashtag("Hello there thanks for trying my Kata"));
