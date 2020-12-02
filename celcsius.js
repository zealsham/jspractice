// kelving to celcius converter 
// celcius = kelvin-273

 const prompt = require('prompt-sync')()

function inputHanlder(){
    let CurrentTemperature;
    CurrentTemperature = prompt("enter the temperature to convert ")

    if(isNaN(CurrentTemperature)){
        console.log("enter a valid number")
        return;
    }
    console.log(CurrentTemperature)
   
    return CurrentTemperature
}

function converter(kelvinDegree){
    if(typeof kelvinDegree=='undefined'){
        console.log("you don't adhere to instruction do you?")
        return
    }
    console.log(`${kelvinDegree} kelvin is the same as ${kelvinDegree-273} celcisus`)
}

value= inputHanlder()
converter(value)