function fibonacciIterative(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacciIterative(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
