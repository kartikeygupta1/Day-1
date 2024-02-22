function isPrime(number) {
    // Check if number is less than 2
    if (number < 2) {
        return false;
    }
    // Check if number is divisible by any integer from 2 to its square root
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

// Test the function
const num = 23; // Change this number to test different values
if (isPrime(num)) {
    console.log(num + " is a prime number");
} else {
    console.log(num + " is not a prime number");
}
num=45;
