function longestWord(str) {
    const words = str.split(' ');
    let longest = '';
    let maxLength = 0;
    for (let word of words) {
        word = word.replace(/[^a-zA-Z0-9]/g, '');
        if (word.length > maxLength) {
            maxLength = word.length;
            longest = word;
        }
    }
    return longest;
}
const inputString = "Hello, this is a test string with different words!";
const longest = longestWord(inputString);
console.log("Longest word:", longest); 