function shout(string) {
    return string.toUpperCase();
}


function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    console.log(string.toUpperCase());
}

function logWhisper(string){
    console.log(string.toLowerCase());
}
 
function sayHiToGrandma(string){
/*    switch(string){
        case string === string.toLowerCase():
            return ("I can\'t hear you!");
          break;
        case string === string.toUpperCase():
            return ("YES INDEED!");
          break;
        case string === "Let's have dinner together!":
            return ("I would love to!");
          break;
        }
       */
    if(string === string.toLowerCase()){
        return ("I can\'t hear you!");
    } else if(string === string.toUpperCase()){
        return ("YES INDEED!");
    }else if (string === "Let's have dinner together!") {
        // If the string is exactly "Let's have dinner together!"
        return "I would love to!";
    }else {
        // If none of the conditions match
        return "Huh? What did you say?";
    }
    
}
console.log(sayHiToGrandma('hello')); // Output: "I can't hear you!"
console.log(sayHiToGrandma('HELLO')); // Output: "YES INDEED!"
console.log(sayHiToGrandma("Let's have dinner together!")); // Output: "I would love to!"
console.log(sayHiToGrandma("How are you?"));