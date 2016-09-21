'use strict';

let cur = ['xxx', 'aaa', 'yyy', 'hij'];                                            //sample data
let hist = [['aaa', 'bbb'], ['ccc', 'ddd', 'eee', 'fff'], ['ggg', 'hij', 'abc']];  //sample data

let newStrings = [];
let newHistory = [];

let results = {};

let historySearch = (current, history) => {
  let seen = {};
  for (let i = 0 ; i < history.length ; i++) {               //add old history to dictionary so it can be searched more efficiently.
    for (let j = 0 ; j < history[i].length ; j++) {
      seen[history[i][j]] = true;
    }
  }
  for (let i = 0 ; i < current.length ; i++) {               //compare new string to dictionary keys.
    if (!seen[current[i]]) {
      newStrings.push(current[i]);
    }
  }
  newHistory = history;
  newHistory.shift();                                        //remove first element from history and add new element to the end.
  newHistory.push(newStrings);
  
  results.newStrings = newStrings;                           //add the two values to a single object so that it can be returned by the function.
  results.newHistory = newHistory;
  
  return results;
};

console.log(historySearch(cur, hist));                       //call function with sample data.