// rock paper implementation for codecademy 
//trying to be real world as i can 

const prompt = require('prompt-sync')()

const getUserInput= () =>{
    let input =prompt("enter either  \'rock\' , \'paper\' or \'scissors\' : ")
    return input
}


function checkUserInput(){
    let input = getUserInput()
    
    if(typeof input=='undefined'){
        console.log("you did not enter anything")
        return
    }
    input = input.toLowerCase()
    if(input === "rock" || input == "paper" || input == "scissors"){
        
        return input
    }
    console.log("enter one of rock ,paper or scissors")
}

function generateRandomNumber(min,max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() *(max-min)+min)
}

let computerChoice= function(){
    aiChoice = generateRandomNumber(1,3)
    
    switch(aiChoice){
        case 1:
            return "rock"
            break
        case 2:
            return "paper"
            break
        case 3:
            return "scissors"
            break
    }
}

function gameLogic(computerGuess){
    //computerGuess is a function , gave me lil headache when reading this code weeks later
    
   let userChoice = checkUserInput()
   if(!userChoice){
       console.log("adhere to instructions")
       return 1
   }
  
    let computerChoice = computerGuess() //head ache code

   console.log(`computer chosed ${computerChoice}`)
    if(userChoice===computerChoice){
        return "it was tie"
    }else if(userChoice ==="rock" && computerChoice==="scissors"){
        return "USER WIN"
    }else if(userChoice==="scissors" && computerChoice==="paper"){
        return "USER WIN"
    }else if(userChoice ==="paper" && computerChoice==="rock"){
        return "USER WIN"
    }
    return "COMPUTER WINS"
}

console.log(gameLogic(computerChoice))