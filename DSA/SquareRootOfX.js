// SquareRoot of X and Binary Search also 
// Binary search is the very important topic if we are talking about interviews, So we should be very fluent at writing BinarySearch , 
// So Before Interview Be fluent at writing interviews, make the habit of writing binary search *** 

//Problem Statement : 
// Square root can never Excceed (x/2)
// 1.x<2 return x
// 2.x>2 (check the value from the 2...x/2) 
//  using the built-in function
var mySqrt = function (x) { //LeetCode Problem
    return Math.trunc(Math.pow(x, 0.5));
    // return Math.trunc(x ** 0.5)
};

var mySqrt = function (x) {
    if (x < 2) return x;
    let right = Math.floor(x / 2);
    let left = 2;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let square = mid * mid;
        if (square == x) return mid;
        else if (x < square) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return right;
};


 