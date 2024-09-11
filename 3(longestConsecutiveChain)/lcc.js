function longestConsecutiveChain(arr){
    if(arr.length === 0) return 0;

    // sorting the array
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

let arr = [5, 4, 20, 1, 3, 2];
console.log(longestConsecutiveChain(arr)); 