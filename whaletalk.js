/*
Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

There are a few simple rules for translating text to whale language:

There are no consonants. Only vowels excluding “y”.
The u‘s and e‘s are extra long, so we must double them in our program.

*/
const prompt = require('prompt-sync')()
const getUserInput =()=>{
      let input = prompt("Enter the text to be converted to whale talk")
      return input
}

const sanitizeInput =()=>{
    let inputToSantize = getUserInput()
    //ensure consecutive digits is not entered 
    let containNumber = parseInt(inputToSantize)
    if(!isNaN(containNumber)){
        console.log("good luck identifying the vowel equivalent of numerals")
        return
    }
    return inputToSantize.toUpperCase()

}
const isVowel = ()=>{
    let alphabet = sanitizeInput()
    if(typeof alphabet ==='undefined'){
        console.log("you probably entered consecutive digits")
        return
    }
    let vowelsInInput = []
    const vowels=['A','E','I','O','U','Y'] //shh i no 'Y' isn't a vowel but you know 
    for(let i=0; i<alphabet.length; i++){
        if(vowels.indexOf(alphabet[i]) > -1){ // could have used Array.includes but just decided to stick wit this 
             vowelsInInput.push(alphabet[i])
        } 

    }
    return vowelsInInput
}

const whaleTalkLogic = (arrayOfVowels)=>{
    let whaleTalkArray = []
    if (arrayOfVowels.length <1) { //if no vowels in input
        return "sorry , the text can't be converted to whale talk"

    }
    for(let i =0; i<arrayOfVowels.length; i++){
        if(arrayOfVowels[i]==="U" || arrayOfVowels[i]==="E"){
            let WhaleChar= arrayOfVowels[i]+arrayOfVowels[i]
            whaleTalkArray.push(WhaleChar)
            continue
        }
        whaleTalkArray.push(arrayOfVowels[i])
    }
    
    console.log(whaleTalkArray)
    return whaleTalkArray.join('')
}

let textToBeTranslated = isVowel()
console.log(whaleTalkLogic(textToBeTranslated))
