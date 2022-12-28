"use strict"

// Daily Challenge: Not Bad

// 1. Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.
let sentence = "This daily challenge is not really bad at all."

// 2. Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).
let wordNot = sentence.indexOf("not")

// 3. Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” (from the sentence variable).
let wordBad = sentence.indexOf("bad")

// 4. If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
// 5. If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.
if(wordBad > -1 && wordNot > -1 && wordBad > wordNot) {
    console.log(sentence.replace(sentence.substring(wordNot, wordBad+3), "good"))
} else {
    console.log(sentence)
}