function add(numbers: string): number {
    // Empty string - case
    if (numbers === '') {
      return 0;
    }
  
    // Seperator as 'comma' or 'newline'
    const numberArray = numbers.split(/[\n,]/);
  
    // Input Validation - To ensure all numbers are positive integers
    if (numberArray.some(num => !/^\d+$/.test(num) || parseInt(num) < 0)) {
      throw new Error('Only non-negative integers are allowed.');
    }
  
    // Add all number from the input
    return numberArray.reduce((sum, num) => sum + parseInt(num), 0);
  }
  
// call to the function
const result = add('1,2,3,4');
console.log(result); 