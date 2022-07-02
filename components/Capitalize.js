function Capitalize(str) {
  const words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
  }

  /*
  console.log(strArr);
  const newStr = strArr
    .map(
      (string) => string[0].toUpperCase() + string.substring(1).toLowerCase()
    )
    .join(" ");
  console.log(newStr); */
  return words.join(" ");
}

export default Capitalize;
