/*
Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

1. The length of both num1 and num2 is < 5100.
2. Both num1 and num2 contains only digits 0-9.
3. Both num1 and num2 does not contain any leading zero.
4. You must not use any built-in BigInteger library or convert the inputs to integer directly.

*/

var addStrings = function(num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  let sum = '';

  for (;i >= 0 || j >= 0 || carry > 0;i--, j--) {
      const digit1 = i < 0 ? 0 : num1.charAt(i) - '0';
      const digit2 = j < 0 ? 0 : num2.charAt(j) - '0';
      const digitsSum = digit1 + digit2 + carry;
      sum = `${digitsSum % 10}${sum}`;
      carry = Math.floor(digitsSum / 10);
  }

  return sum;
};
