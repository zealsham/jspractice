// magic 8 ball program for codecademy , i don't have pro so i just read the problem specification 
//by inspecting the source on the "try pro" page .
//i try to make my solution as input proof as i can .
const prompt = require('prompt-sync')()



function InputHandler(){
    let input =prompt("please enter your question: ")
    let containNumbers= parseInt(input)
    if(!input || typeof input !== 'string' || !isNaN(containNumbers)){ //ensure someone doesn't enter consecutive digits as question
        console.log("please enter a valid question")
        return
    }
    return input
}

function answerGenerator(question){
let programAnswers=['It is certain',
'Without a doubt',
'Most likely',
'Yes',
'Reply hazy try again',
'Ask again later',
'My reply is no',
'No',
'Very doubtful',]

    if(typeof question=='undefined'){
        console.log("you no dey hear word.")
        return
    }
    console.log(`you asked..... \n ${question}`)
    console.log("thinking .....")
    let value = Math.floor(Math.random() * (programAnswers.length-1 )) //picks a random value in the range of the array
   //realize i could just do console.log(programAnsersw[value]), no need for the switch case at all
    switch(value){
        case 1:
            console.log(programAnswers[1])
            break
        case 2:
            console.log(programAnswers[2])
            break
        case 3:
            console.log(programAnswers[3])
            break
        case 4:
            console.log(programAnswers[4])
            break
        case 5:
            console.log(programAnswers[5])
            break
        case 6:
            console.log(programAnswers[6])
            break
        case 7:
            console.log(programAnswers[7])
            break
        case 8:
            console.lof(programAnswers[8])
            break
        default:
            console.log(programAnswers[0])
            break
    }
}
answerGenerator(InputHandler())