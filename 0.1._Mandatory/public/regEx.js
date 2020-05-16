// CHEATSHEET http://regexrenamer.sourceforge.net/help/regex_quickref.html


// i flag ignores case
const myRegEx = /hello/i
const result = myRegEx.test("Hello World")

// console.log(result)

// Pipe = or

const petString = "Anders has a turtle"
const petRegEx = /dog|cat|bird|fish|turtle/

// console.log(petRegEx.test(petString))

// Match

const extractString = "Extract the word cow from this string"
const cowRegEx = /cow/
const stringRegEx = /string/

// console.log(extractString.match(cowRegEx))
// console.log(extractString.match(stringRegEx))

// matching multiple with the global flag

// console.log("Repeat, Repeat, Repeat".match(/Repeat/g))

// exercise

const twinkleStar = "Twinkle, twinkle, little star"

// console.log(twinkleStar.match(/Twinkle/ig))

// Wildcards

const humString = "That's humbug!"
const hugString = "I need a hug"
const huRegex = /hu+/

// console.log(humString.match(huRegex))
// console.log(hugString.match(huRegex))

// console.log("He's a fun 'un".match(/.un/g))

// console.log("I found big bugs in my bag".match(/b[aiu]g/g))

// Exercise: find all the vowels in the string above

// console.log("I found big bugs in my bag".match(/[aeiou]/g))

// Negated character sets

// console.log("I found big bugs in my bag".match(/b[^ai]g/g))

// Range

// console.log("6k854khgf45ghj".match(/[0-9]/g))

// Exercise: Match the entire Alphabet

// console.log("æ6k854køhgaf45gåhj".match(/[a-z]/ig))

// alphanumeric

// console.log("æ6k854køhgaf45gåhj".match(/[a-z0-9]/ig))

// Mutiple Matches

console.log("go goo goooooo goooooooo".match(/go+/ig))













