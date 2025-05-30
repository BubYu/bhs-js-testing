/*
 * This file is where you should write your code. Remember to click
 * Run after you make changes to re-run the tests with your new code.
 */

function countHi(str) {
  if (str.length < 2) return 0;
  if (str.slice(0, 2) === "hi") {
    return 1 + countHi(str.slice(2));
  }
  return countHi(str.slice(1));
}


function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n-1) + fibonacci(n-2);
}


function triangle(rows) {
  if (rows <= 0) return 0;
  return rows + triangle(rows - 1);
}


function reverseString(str) {
  if (str === "") return "";
  return str[str.length - 1] + reverseString(str.slice(0, -1));
}


function sumDigits(n) {
  if (n < 10) return n;
  return (n % 10) + sumDigits(Math.floor(n / 10));
}


function palindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return palindrome(str.slice(1, -1));
}


function binarySearch(arr, target, lo = 0, hi = arr.length - 1) {
  if (lo > hi) return -1;
  const mid = Math.floor((lo + hi) / 2);
  if (arr[mid] === target)   return mid;
  else if (arr[mid] < target)  return binarySearch(arr, target, mid + 1, hi);
  else                           return binarySearch(arr, target, lo, mid - 1);
}


function pascalsTriangle(n) {
  // Base cases
  if (n === 0) return [];
  if (n === 1) return [[1]];

  // Recursive case
  const prev = pascalsTriangle(n - 1);
  const lastRow = prev[prev.length - 1];
  
  //nth row
  const nextRow = [1];
  for (let i = 1; i < lastRow.length; i++) {
    nextRow.push(lastRow[i - 1] + lastRow[i]);
  }
  nextRow.push(1);

  //return
  return [...prev, nextRow];
}


function combinationSum(candidates, target) {
    
  const result = [];
  function backtrack(start, remain, combo) {
    if (remain === 0) {
      result.push([...combo]);
      return;
    }
    if (remain < 0) return;

    for (let i = start; i < candidates.length; i++) {
      combo.push(candidates[i]);
      backtrack(i, remain - candidates[i], combo);
      combo.pop();
    }
  }

  backtrack(0, target, []);
  return result;
}


function subsets(arr) {
    
  const res = [];
  function dfs(idx, combo) {
    if (idx === arr.length) {
      res.push([...combo]);
      return;
    }
    // Exclude
    dfs(idx + 1, combo);
    // Include
    combo.push(arr[idx]);
    dfs(idx + 1, combo);
    combo.pop();
  }
  dfs(0, []);
  return res;
}