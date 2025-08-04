// 4. .filter()

//Syntax: array.filter(function)
 
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8,9, 10];
  let even = numbers.filter(num => num % 2 === 0);

  console.log(even); // Output: [ 2, 4, 6, 8, 10 ]