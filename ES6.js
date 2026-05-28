// variable declarations
// tempelate litetals
// arrow functions

// Implicit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

const celsiusToFahrenheit = celsius => (celsius * 9/5) + 32;
function createStudentRecord(name, score) {
  return {
    studentName: name,
    finalScore: score
  };
}
const createStudentRecord = (name, score) => ({ studentName: name, finalScore: score });

// Explicit
function calculateTotal(price, taxRate, discount) {
  var taxAmount = price * taxRate;
  var subtotal = price + taxAmount;
  return subtotal - discount;
}

const calculateTotal = (price, taxRate, discount) => {
  const taxAmount = price * taxRate;
  const subtotal = price + taxAmount;
  return subtotal - discount;
};


// Destructing
// Default parameters
// Enhanced object literals
// classes
// modules
// promises
// Async/Await
// optional chaining
// Nullish coalescing
// comnining nullish and optioanal
// array  methods(filter,map & reduce)
// looping