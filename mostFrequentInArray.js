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
