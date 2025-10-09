function generateFibonacci(n) {

    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else {
        let arr = [0, 1];

        for (let i = 2; i < n; i++) {
            arr.push(arr[i - 1] + arr[i - 2]);
        }

        return arr;
    }
}

module.exports = { generateFibonacci };


//using Recursion 
if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  }

  // Recursive call to get Fibonacci of (n - 1)
  const prev = generateFibonacci(n - 1);
  
  // Add the next number (sum of last two numbers)
  prev.push(prev[prev.length - 1] + prev[prev.length - 2]);
  
  return prev;