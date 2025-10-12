var sortArray = function (nums) {
    if (nums.length <= 1) {
        return nums;
    } 
    let middle = Math.floor(nums.length/2);
    let left = sortArray(nums.slice(0,middle));
    let right = sortArray(nums.slice(middle));
    return merge(left , right);
};

function merge(leftArray , rightArray){
    let result = [] ;
    let i = 0 ;
    let j = 0 ;
    while (i<leftArray.length && j <rightArray.length){
        if(leftArray[i]<rightArray[j]){
            result.push(leftArray[i]);
            i++;
        }
        else{
            result.push(rightArray[j]);
            j++;
        }
    }
    return [...result, ...leftArray.slice(i) , ...rightArray.slice(j)]
}