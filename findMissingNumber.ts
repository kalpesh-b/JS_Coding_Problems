function findMissingNumber(input, n) {
  for (let i = 0; i < n - 1; i++) {
    if (input[i + 1] - input[i] !== 1) {
      return input[i] + 1;
    }
  }
}

console.log('@@@ ############################### @@');
console.log('Missing Number');
console.log('###############################');

const input1 = [1, 2, 3, 4, 5, 7, 8, 9, 10];
console.log(`INPUT = ${JSON.stringify(input1)}`);
console.log('Ans: ', findMissingNumber(input1, 10));

const input2 = [1, 2, 3, 5];
console.log(`INPUT = ${JSON.stringify(input2)}`);
console.log('Ans: ', findMissingNumber(input2, 5));

const input3 = [1];
console.log(`INPUT = ${JSON.stringify(input3)}`);
console.log('Ans: ', findMissingNumber(input3, 2));

console.log('###############################');
