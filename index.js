// Your code here

function saturdayFun(activity="roller-skate") {
//console.log(`This Saturday, I want to ${phrase}!`)
return `This Saturday, I want to ${activity}!`;
}


function mondayWork(event="go to the office") {
  return `This Monday, I will ${event}.`;
}

function wrapAdjective(flair="*") {
  return function(string="special") {
    return `You are ${flair} ${string} ${flair}.` 
  }
}
