//my opinion of  real world sleep breaker project for codecademy 
// i don't have pro , so just implementing it from what i feel the problem is 


const prompt = require('prompt-sync')()

const sanitizeUserInput = (userInput) =>{
    userInput = parseInt(userInput)
    if(isNaN(userInput) || userInput > 24){ //can't sleep more than 24 hours 
        console.log("you did not enter a number or entered something > 24,  so im killing the program")
        process.exit()
    }
    return userInput
}

const getUserInput = () => {
    
    let daysOfWeek =["Sunday","Monday","Tuesday","wednesday","Thursday","Friday","Saturday"]
    let dayCounter=0
    let inputData=[]
    
    while(dayCounter < daysOfWeek.length){
        let userAnswer= prompt(`How many hours did you sleep on${daysOfWeek[dayCounter]}: `)
        userAnswer = sanitizeUserInput(userAnswer)
        inputData.push(userAnswer)
        dayCounter++

    }
    return inputData

    
}
const calcSleepDebt = () =>{
    const idealSleepTime = 8*7
    let sleepTimes = getUserInput()
    const totalSleepTimes = sleepTimes.reduce((a,b)=> a+b)
    const sleepDebt = idealSleepTime - totalSleepTimes
    
    console.log(`You slept for just ${totalSleepTimes} hours `)
    console.log(`ideal hours of sleep for the week is ${idealSleepTime} hours`)
    if(totalSleepTimes > idealSleepTime){
        console.log("you over slept my friend ")
        return
    }
    console.log(`your sleep debt is ${idealSleepTime-totalSleepTimes} hours`)
    

}
calcSleepDebt()