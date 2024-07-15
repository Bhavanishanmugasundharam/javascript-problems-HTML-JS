function findMissingNumber(nums) {
    const n = nums.length;  
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((sum, num) => sum + num, 0);   
    const missingNumber = expectedSum - actualSum;    
    return missingNumber;
}
const nums = [0,1,2,3,4,5,6,7,9];
const missing = findMissingNumber(nums);
console.log("Missing number is:", missing); 
