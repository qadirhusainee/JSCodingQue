var cats = ["Tom", "Fluffy", "Tom", "Bella", "Chloe", "Tom", "Chloe"];

function getMosFrequent(array) {
  var counts = {};
  var compare = 0;
  var mostFrequent;
  for (var i = 0, len = array.length; i < len; i++) {
    var word = array[i];

    if (counts[word] === undefined) {
      counts[word] = 1;
    } else {
      counts[word] = counts[word] + 1;
    }
    if (counts[word] > compare) {
      compare = counts[word];
      mostFrequent = cats[i];
    }
  }
  console.log(mostFrequent);
  return mostFrequent;
}

getMosFrequent(cats);

// *********************************************

const getMosFrequentRepeated = () => {
  let mapping = {};
  let maxrepeated = [];
  let maxCount = 0;
  for (let i = 0; i < cats.length; i++) {
    mapping[cats[i].toLowerCase()] = ++mapping[cats[i].toLowerCase()] || 1;
    if (mapping[cats[i].toLowerCase()] > maxCount) {
      maxCount = mapping[cats[i].toLowerCase()];
    }
  }

  for (const [key, value] of Object.entries(mapping)) {
    key;
    if (value === maxCount) {
      maxrepeated.push(key);
    }
  }
};
getMosFrequent();
