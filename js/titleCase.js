const chalk = require("chalk");
const log = console.log;
let green = chalk.greenBright;

function replaceFirst(t, e) {
  let newTitle = t.toUpperCase().split(" ");
  if (e) {
    let exceptions = e.toUpperCase().split(" ");
    let retArr = [];
    for (let i = 0; i < newTitle.length; i++) {
      let word = newTitle[i];
      if (i === 0) {
        let firstWord =
          newTitle[i].charAt(0).toUpperCase() +
          newTitle[i].toLowerCase().slice(1);
        retArr.push(firstWord);
      }
      if (exceptions.includes(word) && i !== 0) {
        let firstWord =
          newTitle[i].charAt(0).toLowerCase() +
          newTitle[i].toLowerCase().slice(1);
        retArr.push(firstWord);
      } else if (i !== 0) {
        let firstWord =
          newTitle[i].charAt(0).toUpperCase() +
          newTitle[i].toLowerCase().slice(1);
        retArr.push(firstWord);
      }
    }
    return retArr.join(" ");
  } else if (!e) {
    let newArr = t.toLowerCase().split(" ");
    for (let i = 0; i < newArr.length; i++) {
      newArr[i] = newArr[i].charAt(0).toUpperCase() + newArr[i].substring(1);
    }
    return newArr.join(" ");
  }
}
function titleCase(title, minorWords) {
  return replaceFirst(title, minorWords);
}

log(green(titleCase("THE WIND IN THE WILLOWS", "The In")));
log(green(titleCase("SUh asdasd Dlasd", "")));
log(green(titleCase("a clash of KINGS", "a an the of")));
log(green(titleCase("aBC deF Ghi")));

module.exports = { titleCase };
