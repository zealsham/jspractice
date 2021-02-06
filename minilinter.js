//does not require that much of user input , not a cool project but 
// i'll do it anyway

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

const getWords = ()=>{
    let storyWords = story.split(" ")
    
    return storyWords.length
}

const removeUncessaryWords =(wordArray)=>{
    wordArray = wor
    let betterWords = wordArray.filter((word)=>{
       return unnecessaryWords.indexOf(word)  <1
        
    })
    return betterWords
}
const getoverUsedWords = (wordArray)=>{
    let wordcount = wordArray.filter((word)=>{
        return overusedWords.indexOf(word)> -1
    }).length

    return wordcount.length;
    
}
const getSentenceCount=(wordArray)=>{
    wordArray = wordArray.split("")
       let sentenceCount =0
       wordArray= wordArray.forEach((word)=>{
           if(word[word.length-1]==="." || word[word.length-1] ==='!'){
               sentenceCount++
           }
       })
       return sentenceCount
    
}

const overUsedWordCount =(story,overUsed) =>{
    let words =story.split(" ")
    //console.log(words)
    
    let map ={}
    for(let i=0; i<words.length; i++){
        if(map[words[i]]){
            map[words[i]]++
            continue
        }
        map[words[i]]=1
    }
    const prepare= ()=>{
        //console.log(map)
        for (let [key,value] of Object.entries(map)){
            if(overUsed.indexOf(key )> -1 ){
                console.log(key + " appeared "+ value +" times")
            }
        }
    }
    prepare()
   //console.log(map)
}
const outpuEverything=()=>{
    console.log(`the total number of words is ${getWords()}`)
    console.log(`The number of sentence is ${getSentenceCount(story)}`)
    overUsedWordCount(story,overusedWords)
    
}
outpuEverything()
console.log(overusedWords)