function maskify(cc) {
  return cc.replace(/.(?=.{4,}$)/g, "#");
}

console.log(maskify("Skippy"));
console.log(maskify("Nananananananananananananananana Batman!"));
