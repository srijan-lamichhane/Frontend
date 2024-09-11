// TASK 3
//Input: arr[] = {1, 9, 3, 10, 4, 20, 2}
// Explanation: The subsequence 1, 3, 4, 2 is the longest subsequence of consecutive elements
// Expected Output: 4

function longestConsecutiveChain(arr){
    if(arr.length === 0) return 0;

    // sorting the array and removing duplicate using set
    arr = [...new Set(arr)].sort((a,b) => a-b);

    let longestChain = 1;
    let currentChain = 1;

    // loop through the array (to find longest chain)
    for(let i = 1; i < arr.length; i++){
        if(arr[i] === arr[i-1]+1){
            currentChain++;
        }else{
            longestChain = Math.max(longestChain, currentChain);
            currentChain = 1; // the value is reset.
        }
    }


    return longestChain;
}

let arr = [1, 9, 3, 10, 4, 20, 2];
console.log(longestConsecutiveChain(arr)); 

//Time complexity: O(nlogn) since sorting is used. while looping through the array after sorting takes O(n)
// as each element in the array is checked once.

//Space Complexity: O(n) due to set and sorted array.