// #EASY

const productSum = (list, depth) => {
  let sum = 0;

  list.forEach((item) => {
    if (Array.isArray(item)) {
      sum += productSum(item, depth + 1);
    } else {
      sum += item;
    }
  });

  return sum * depth;
};

const list = [1, 2, [2, 3], 6, [[2, 3], 1], 7];
console.log(productSum(list, 1));
