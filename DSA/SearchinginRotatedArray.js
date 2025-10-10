var search = function (arr, target) {
    let l = 0;
    let r = arr.length - 1;
    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        //left array Sorted 
        if (arr[l] <= arr[mid]) {

            if (arr[l] <= target && arr[mid] > target) {
                r = mid - 1;
            }
            else {
                l = mid + 1;
            }
        }
        else {
            if (arr[mid] < target && arr[r] >= target) {
                l = mid + 1;
            }
            else {
                r = mid - 1;
            }
        }
    }
    return -1;
};

//we have to check whether the left or right side array is sorted.  and implement the binary search .