let beginWord = "hit",
  endWord = "cog",
  wordList = ["hot", "dot", "dog", "lot", "log", "cog"];

const replaceWord = (word, index) =>
  word.substring(0, index) + "*" + word.substring(index + 1);

var ladderLength = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return 0;
  let graph = {};

  for (word of wordList) {
    for (let i = 0; i < word.length; i++) {
      let pattern = replaceWord(word, i);
      if (graph[pattern]) {
        graph[pattern] = [...graph[pattern], word];
      } else {
        graph[pattern] = [word];
      }
    }
  }
  console.log(graph);
  // breadth first search
  let queue = [beginWord];
  let visited = new Set();
  visited.add(beginWord);
  let hops = 1;
  while (queue.length) {
    let currentWord = queue.shift();
    console.log(currentWord)
    if (currentWord === endWord) {
      return hops;
    }
    for (let i = 0; i < currentWord.length; i++) {
      let pattern = replaceWord(currentWord, i);
      if (graph[pattern]) {
        for (let nextWord of graph[pattern]) {
          if (!visited.has(nextWord)) {
            visited.add(nextWord);
            queue.push(nextWord);
            // console.log(queue);
          }
        }
      }
    }
    hops += 1;
  }
  return 0;
};
