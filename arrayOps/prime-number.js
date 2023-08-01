// Prime numbers are natural numbers that are divisible by only 1 and the number itself
// prime numbers include 2, 3, 5, 7, 11, 13, etc

const isPrime = (number) => {
  for (let idx = 2; idx <= Math.sqrt(number); idx++)
    if (number % idx === 0) return false;
  return true;
};

console.log(isPrime(6));
console.log(isPrime(7));
console.log(isPrime(13));
console.log(isPrime(15));
