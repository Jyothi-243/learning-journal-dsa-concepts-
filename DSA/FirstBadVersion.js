//3 variations in binary search 

var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {

        let l = 1;
        let r = n;
        while (l < r) {
            let mid = l + Math.floor((r - l) / 2);

            if (!isBadVersion(mid)) {
                l = mid + 1;
            }
            else {
                r = mid;
            }
        }
        return r;

    };
};