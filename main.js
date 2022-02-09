// 0. Defining arrays

const input = 'eagles is nice and I like it sometimes';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

// 1. First & second loop -> Each element of the first loop is looped with the second loop.

for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  //console.log(`inputIndex es ${inputIndex}`)
  for (let vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++) {
    //console.log(`inputIndex es ${vowelsIndex}`)

    // 2. If the letter in input is a vowel, then is added to resultArray.

    if (input[inputIndex] === vowels[vowelsIndex]) {
      resultArray.push(input[inputIndex]);
    }
  }

  // 3. If the letter in the input is an e, then another one (e) is added to resultArray.
  if (input[inputIndex] === 'e') {
    resultArray.push(input[inputIndex]);
  }

  // 4. If the letter in the input is an u, then another one (u) is added to resultArray.
  if (input[inputIndex] === 'u') {
    resultArray.push(input[inputIndex]);
  }
}

//5. Shows the message transformed by console.
console.log(resultArray);
