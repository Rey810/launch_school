function countMaxAdjacentConsonants(string) {
  // consonants
  let consonants = ['q', 'w', 'r', 't', 'y', 'p', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm' ]
  
  // vowels
  let vowels = ['a', 'e', 'i', 'o', 'u']

  // remove spaces
  let stringArray = string.split("").filter(char => char !== " ");

  let count = 0;
  let tempString = "";

  stringArray.forEach((char, index) => {
    if (consonants.includes(char)) {
      tempString += char;

      // updates the count with another consonant if the last char is a consonant
      if (tempString.length > 1 && tempString.length >= count && index === stringArray.length - 1) {
        count = tempString.length;
        tempString = "";
      }
    }

    if (vowels.includes(char)) {
      if (tempString.length === 1) tempString = "";
      if (tempString.length > 1 && tempString.length > count) {
        count = tempString.length;
        tempString = "";
      }
    }

  })

  return count;
}



function sortStringsByConsonants(stringsList) {
  let copyOfStringsList = [...stringsList];
  copyOfStringsList.sort((str1, str2) => {
    if (countMaxAdjacentConsonants(str1) < countMaxAdjacentConsonants(str2)) 
      { 
        return 1;
      }
    else if (countMaxAdjacentConsonants(str1) > countMaxAdjacentConsonants(str2)) {
      return -1;
    }

    return 0;
  });

  return copyOfStringsList; 
}

let list1 = ['aa', 'baa', 'ccaa', 'dddaa'];
console.log(sortStringsByConsonants(list1));
// ['dddaa', 'ccaa', 'aa', 'baa']

let list2 = ['can can', 'toucan', 'batman', 'salt pan'];
console.log(sortStringsByConsonants(list2));
// ['salt pan', 'can can', 'batman', 'toucan']

let list3 = ['bar', 'car', 'far', 'jar'];
console.log(sortStringsByConsonants(list3));
// ['bar', 'car', 'far', 'jar']

let list4 = ['day', 'week', 'month', 'year'];
console.log(sortStringsByConsonants(list4));
// ['month', 'day', 'week', 'year']