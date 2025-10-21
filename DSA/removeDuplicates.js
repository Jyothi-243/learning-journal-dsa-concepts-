var removeDuplicates = function (nums) {
    let x = 0;
    // for (let i = 0 ; i<nums.length ; i++ ){
    //     if (nums[i]>nums[x]){
    //         x += 1 ;
    //         nums[x] = nums[i];
    //     }
    // }
    //both codes work 
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[x]) {
            nums[x + 1] = nums[i];
            x++;
        }
    }
    return x + 1;
};
