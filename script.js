// Problem - 1
const reverse = (text) => {
  const textArray = text.split("");
  let reverseArray = [];
  for (let item of textArray) {
    reverseArray.unshift(item);
  }
  return reverseArray.join("");
};

// console.log(reverse("hello"));

// Problem - 2
const vowelCount = (text) => {
  const lowercase = text.toLowerCase();
  const textArray = lowercase.split("");
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let item of textArray) {
    for (let vowel of vowels) {
      if (item === vowel) {
        count = count + 1;
      }
    }
  }
  return count;
};

// console.log(vowelCount("programming"));

// Problem - 3
const isPalindrome = (text) => {
  const textArray = text.split("");
  let reverseArray = [];
  for (let item of textArray) {
    reverseArray.unshift(item);
  }
  const reverse = reverseArray.join("");
  if (text === reverse) {
    return true;
  } else {
    return false;
  }
};

// console.log(isPalindrome("madam"));
// console.log(isPalindrome("programming"));

// Problem - 4
const maxNumber = (numbers) => {
  return Math.max(...numbers);
};

// console.log(maxNumber([2, 5, 2, 8, 5]));

// Problem - 5
const removeDuplicate = (numbers) => {
  const uniqueNumber = [];
  for (let number of numbers) {
    if (!uniqueNumber.includes(number)) {
      uniqueNumber.push(number);
    }
  }
  return uniqueNumber;
};

// console.log(removeDuplicate([3, 5, 2, 3, 5, 6, 2, 4]));

// Problem - 6
const sumOfArray = (numbers) => {
  let total = 0;
  for (let number of numbers) {
    total = total + number;
  }
  return total;
};

// Problem - 7
const evenNumbers = (numbers) => {
  const evenNumbers = [];
  for (let number of numbers) {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
  }
  return evenNumbers;
};

// Problem - 8
const capitalize = (texts) => {
  const textsArray = texts.split(" ");
  const capitalizeArray = [];
  for (let text of textsArray) {
    text = text.split("");
    text[0] = text[0].toUpperCase();
    text = text.join("");
    capitalizeArray.push(text);
  }
  return capitalizeArray.join(" ");
};

// Problem - 9
const factorial = (number) => {
  let facto = 1;
  for (let n = 1; n <= number; n++) {
    facto = facto * n;
  }
  return facto;
};

// Problem - 10
const pingPong = () => {
  for (n = 1; n <= 20; n++) {
    if (n % 3 === 0) {
      if (n % 5 === 0) {
        console.log("PingPong");
      } else {
        console.log("Ping");
      }
    } else if (n % 5 === 0) {
      console.log("Pong");
    } else console.log(n);
  }
};
