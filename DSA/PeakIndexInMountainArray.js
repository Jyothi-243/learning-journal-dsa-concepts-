var peakIndexInMountainArray = function (arr) {
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        if (arr[m] < arr[m + 1]) {
            l = m + 1;
        }
        else {
            r = m;
        }
    }
    return l;
};

//Moutain array means , It will have only one peak (Binary search can be applied on the sorted array , rotated sorted array also).IMP point.