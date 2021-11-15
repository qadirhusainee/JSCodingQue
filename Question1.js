// const input = [1, 5, 2, 2, 0, 2, 1, 6];

// const expectedOutput = [
//   {
//     count: 2,
//     num: 1,
//   },
//   {
//     count: 1,
//     num: 5,
//   },
//   {
//     count: 3,
//     num: 2,
//   },
//   {
//     count: 1,
//     num: 0,
//   },
//   {
//     count: 1,
//     num: 6,
//   },
// ];

// Kauser's code

const input = [1, 5, 2, 2, 0, 2, 1, 6];
const myInput = [...new Set(input)];
const myOutput = [];

for (let i = 0; i < myInput.length; i++) {
  myOutput.push({ num: myInput[i], count: 0 });
}

for (let i = 0; i < myInput.length; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[j] === myOutput[i].num) myOutput[i].count += 1;
  }
}

console.log(myOutput);
