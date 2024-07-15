function countCharacters(str) {
    let charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
}
const inputString = "hello world";
const result = countCharacters(inputString);
console.log(result);
