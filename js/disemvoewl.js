function disemvowel(str) {
  const pattern = /([aeiouOAEIU])/g;
  return str.replace(pattern, "");
}
