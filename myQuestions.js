// Swapping 2 digits of a number
let num = 321;
let arr = num.toString().split("");

[arr[0], arr[2]] = [arr[2], arr[0]];
console.log(parseInt(arr.join("")));

// Write a function that takes in an array of integers and returns the length of the longest peak in the array.
// A peak is defined as adjacent integers in the array that are strictly increasing until they reach a tip (the highest value in the peak), at which point they become
// strictly decreasing. At least three integers are required to form a peak.

//   For example, the integers 1, 4, 10, 2 form a peak, but the integers 4, 0, 10 don't and neither do the integers 1, 2, 2, 0.
//   Similarly, the integers 1, 2, 3 don't form a peak because there aren't any strictly decreasing integers after the 3.

// Sample Input :  [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]
// Sample Output : 6 // 0, 10, 6, 5, -1, -3

function longestPeak(arr) {
  let count = 0;
  let index = 0;
  let countLargest = 0;

  for (let j = 0; j < arr.length - 1; j++) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        count += 1;
        console.log(count, i, arr[i]);
      } else {
        index = i;
        break;
      }
    }
    for (let k = index; k < arr.length - 1; k++) {
      if (arr[k] > arr[k + 1]) {
        count += 1;
      } else {
        break;
      }
    }
    if (countLargest < count) {
      countLargest = count;
    }
  }
  console.log(countLargest);
}

longestPeak([1, 2, 3, 3, 4, 0]);

// var arr = [1,3,6,10]
// find the missing elements o/p - [2,4,5,7,8,9]

var arr = [1, 3, 6, 10];
function missingArr(arr) {
  console.log(arr);
  let myArr = [];
  for (let i = 0; i < arr.length; i++) {
    let start = arr[i] + 1;
    let end = arr[i + 1];
    for (let j = start; j < end; j++) {
      myArr.push(j);
    }
  }
  return myArr;
}

console.log(missingArr(arr));

// Deep Copy question

const obj = { name: { first: "PinkFloyd", last: "Picard" }, age: 22 };

function ownDeepcopy(obj) {
  const copyObj = {};
  for (const [key, value] of Object.entries(obj)) {
    console.log(key, value);
    copyObj[key] = value;
  }
  console.log(copyObj);
  return copyObj;
}

console.log(ownDeepcopy(obj));

const copy = ownDeepcopy(obj);

copy.name.first = "Johnny";
console.log(obj.name.first);

/* To find the sum of all the elements in an array 'arr' in the range of indices present in the array 'm'. Find time and space complexities */

let arr = [1, 2, 3, 4, 5];
let m = [[1, 2]];
let sumArr = [1, 3, 6, 10, 15];

for (let i = 0; i < m.length; i++) {
  let diff;
  if (
    isNaN(sumArr[m[i][0] - 1])
      ? (diff = sumArr[m[i][1]])
      : (diff = sumArr[m[i][1]] - sumArr[m[i][0] - 1])
  );

  console.log(diff);
}

/* To write a function which creates an object with the property 'name' as 'str' argument passed to it, and on deleting the 'name' property, prints the default name value "Anonymous" instead of undefined */

/* const obj1 = {
  name: 'Kauser'
} */

function createObj(str = "Anonymous") {
  const myObj = {};
  const { nonExistingAttribute = "Anonymous" } = myObj;
  return { name: `${str}` };
}

const user1 = createObj();
delete user1.name;
console.log(user1.name);

/////////////////////////////////////////////////////////////////////

/*
Dhruv is working on a problem where he has been given a string of uppercase alphabets along with a number X, the problem is to find the minimum weight of the string after deletion of total X characters. 

The weight of a string is calculated by finding frequencies of each distinct alphabet and then adding the cubes of them.

For example consider the string "TEST", here frequencies of characters are
T -> 2, E -> 1, S -> 1 and the weight of the string is 8 + 1 + 1 = 10 

Example 1:

Input: S = "ABBCCC", X = 1
Output: 10
Solution: Remove one 'C', then frequency
will be A -> 1, B -> 2, C -> 2.
1 + 8 + 8 = 17


Example 2:

Input: S = "AAABBBBB", X = 4

Output: 2
Explanation: Remove 2 'B's, then frequency
will be A -> 3, B -> 3.
27 + 27 = 54

Split the letters into an array of letters (SPLITTED_STRING). O(n)
Find the count of each unique letter. Start with ith letter and find the number of its occurrences. Then continue the loop and find the next jth letter which is different from the previous ith letter. Continue in this way and keep on pushing the counts of these unique letters in the array. So all the counts of the unique letters are stored in an array now. O(n2)
Then find the largest and 2nd largest count  values in the array.
If largest - 2nd largest >= X, then simply eliminate the letters which has the highest count.
Else  (largest - 2nd largest +1) letters will be eliminated of the letter which has the highest count (decreasing the count) and (X -( largest - 2nd largest +1)) letters will be eliminated of the letter which has the 2nd highest count (decreasing the count)  O(n)

Elimination => It will have 2 nested loops. Outer loop will run through the updated count array. Inner loop will run from 1 to the count value of the current element of the updated count array, and it will eliminate/delete those number of letters by running through the SPLITTED_STRING array. O(n2)
Next run a loop to calculate the sum of cubes of all the values in the count array. That sum is the required result. O(n)
*/

/////////////////////////////////////////////////////////////////////

// Without using .flat(), create a function to flatten an array

// const exampleArray = [1,2,[3,4, [5,6,7], 8], 9, 10];
// flatten(exampleArray); // [1,2,3,4,5,6,7,8,9,10]
// Array.isArray(arr)

function flatten(arr) {
  let myArr = [](function myFlatten(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        myFlatten(arr[i]);
      } else {
        myArr.push(arr[i]);
      }
    }
  })(arr);

  console.log(myArr);
}

flatten([1, 2, [3, 4, [5, 6, 7], 8], 9, 10]);

/////////////////////////////////////////////////////////////////////

// ORIGINAL PROBLEM

const DBConnection = {
  getConnection: function () {
    return Object("DB connection");
  },
};

const connection1 = DBConnection.getConnection();
const connection2 = DBConnection.getConnection();

console.log("Assertion=>" + (connection1 === connection2));

/** PUB SUB pattern */

const pubsub = {
  subscribe: function (event, cb) {},

  publish: function (event, data) {},
};

pubsub.subscribe("click", function (clickedLabel) {
  console.log("click listener 1:", clickedLabel);
});

pubsub.subscribe("click", function (clickedLabel) {
  console.log("Click listener 2", clickedLabel);
});

pubsub.subscribe("video", function (video) {
  console.log("Video was added:", video);
});

pubsub.publish("click", "button1");
pubsub.publish("click", "button2");
pubsub.publish("video", "Asset 1");

/////////////////////////////////////////////////////////////////////

//Sort the following data by name in ascending order.

const personList = [
  { name: "Amol More", age: 11 },
  { name: "Vijay More", age: 10 },
  { name: "Banish Gore", age: 15 },
];

let names = [];
function sortPersonData(personList) {
  for (let i = 0; i < personList.length; i++) {
    names.push(Object.values(personList[i])[0]);
  }
  let temp;
  for (let i = 0; i < names.length; i++) {
    if (names[i] > names[i + 1]) {
      temp = names[i];
      names[i] = names[i + 1];
      names[i + 1] = temp;
    }
  }
  return names;
}

console.log(sortPersonData(personList));

/////////////////////////////////////////////////////////////////////

const person = {
  firstName: "John",
  lastName: "Doe",
  greet: function (greeting, message) {
    console.log(`${greeting} ${this.firstName}. ${message}`);
  },
};

const employee = {
  firstName: "Tom",
  lastName: "Latham",
};

/* Output Should be:
"Hello John. How are you?"
"Hello Tom. How are you?" */

// Using call
let output1 = person.greet.call(person, "Hello", "How are you?");
let output2 = person.greet.call(employee, "Hello", "How are you?");

// Using apply
/* let output1 = person.greet.apply(person, ['Hello', 'How are you?'])
let output2 = person.greet.apply(employee, ['Hello', 'How are you?']) */

// Using bind

/////////////////////////////////////////////////////////////////////

const Square = {
  edge: 10,
  area() {
    return this.edge ** 2;
  },

  perimeter: () => 4 * this.edge,
};
//
Square.area();
Square.perimeter();

/////////////////////////////////////////////////////////////////////
