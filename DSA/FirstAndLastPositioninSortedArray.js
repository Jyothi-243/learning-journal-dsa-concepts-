
//approach - 1
var searchRange = function (arr, target) {
    let l = 0;
    let r = arr.length - 1;
    let res = [-1, -1];

    if (target < arr[l] || target > arr[r] || (arr.length <= 0)) {

        return res;
    }

    //for the starting index
    while (l < r) {
        let mid = l + Math.floor((r - l )/ 2);
        if (arr[mid] < target) {
            l = mid + 1;
        }
        else {
            r = mid;
        }
    }
    if (arr[l] === target) {
        res[0] = l;
    }

    let left = 0;
    let right = arr.length - 1;

    //for the ending index
    while (left < right) {
        let middle = left + Math.ceil((right - left) / 2);
        if (arr[middle] > target) {
            right = middle - 1;
        }
        else {
            left = middle;
        }
    }

    if (arr[left] === target) {
        res[1] = left;
    }
    return res;
};

//approach - 2
var searchRange = function (arr, target) {
    let l = 0;
    let r = arr.length - 1;
    let res = [-1, -1];
    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);
        if (target === arr[m]) {
            res[0] = m;
            r = m - 1
        }
        else if (arr[m] < target) {
            l = m + 1;
        }
        else {
            r = m - 1;
        }
    }

    l = 0;
    r = arr.length - 1;
    while (l <= r) {
        m = l + Math.floor((r - l) / 2);
        if (target === arr[m]) {
            res[1] = m;
            l = m + 1;
        }
        else if(arr[m] < target) {
            l = m + 1;
        }
        else {
            r = m - 1;
        }
    }
    return res;
};
//This is like greedy algorithm , we are setting the value. 
 