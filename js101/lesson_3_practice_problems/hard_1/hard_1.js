function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");

  if ((dotSeparatedWords.length < 4) || (dotSeparatedWords.length > 4)) {
    return false;
  }

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

console.log(isDotSeparatedIpAddress('10.20.43.42'));
console.log(isDotSeparatedIpAddress('10.20.43'));
console.log(isDotSeparatedIpAddress('10.20.43.20.74'));
console.log(isDotSeparatedIpAddress(''));
console.log(isDotSeparatedIpAddress('hello'));