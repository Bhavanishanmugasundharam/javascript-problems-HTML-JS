let input=prompt("enter the input");
console.log("enter the word: "+input);
function palindrome(name)
{
    let reversed = name.split('').reverse().join('');
    if(name==reversed)
       console.log("palindrome");
    else
    console.log("not palindrome");
}
palindrome(input);
