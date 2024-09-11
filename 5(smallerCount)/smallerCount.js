// You are given an integer array nums and you have to return a new counts array where counts[i] is the number of smaller elements to the right of nums[i]

// Normal approach
// function smallerCount(nums) {
//     let counts = [];
//     for (let i = 0; i < nums.length; i++) {
//         let count = 0;
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[j] < nums[i]) {
//                 count++;
//             }
//         }
//         counts.push(count);
//     }
//     return counts;
// }

// let nums = [5, 2, 6, 1];
// console.log(smallerCount(nums)); 

// Merge sort approach

function countSmaller(nums) {
    let counts = new Array(nums.length).fill(0); // each element in counts array is set to 0
    let indexedNums = nums.map((num, i) => [num, i]);  // indexedNums = [[5, 0], [2, 1], [6, 2], [1, 3]]
  
    function mergeSort(arr) {
      if (arr.length <= 1) return arr; // stopping case
  
      const mid = Math.floor(arr.length / 2);
      const left = mergeSort(arr.slice(0, mid));
      const right = mergeSort(arr.slice(mid));
  
      let merged = [], i = 0, j = 0, rightCount = 0;
  
      while (i < left.length && j < right.length) {
        if (left[i][0] > right[j][0]) {
          rightCount++;
          merged.push(right[j]);
          j++;
        } else {
          // For each element in the left, we add how many elements in the right have been merged
          counts[left[i][1]] += rightCount;
          merged.push(left[i]);
          i++;
        }
      }
  
      // for remaining elements
      while (i < left.length) {
        counts[left[i][1]] += rightCount;
        merged.push(left[i]);
        i++;
      }
  
      while (j < right.length) {
        merged.push(right[j]);
        j++;
      }
  
      return merged;
    }
  
    mergeSort(indexedNums);
    return counts;
  }
  
  let nums = [5, 2, 6, 1];
  console.log(countSmaller(nums));  
  

//   Time complexity: O(n log n) as sorting algorithm is used. and merge sort is effecient for this problem
// because insertion and operation is not necessary in merge sort and it saves time and space.

// Space complexity: O(n) since it maintains the array equal to the size of input.