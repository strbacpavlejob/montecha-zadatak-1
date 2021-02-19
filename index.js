const formatDuration = (numSec)=>{

    if(numSec==0){
        return 'now';
    }
    if(numSec<0 || !Number.isInteger(numSec)){
        return 'Only non-negative integers are allowed!';
    }
    //years in secounds = 31,536,000;

    //get time 
    let numYears = Math.floor(numSec / 31536000);
    let numDays = Math.floor((numSec % 31536000) / 86400); 
    let numHours = Math.floor(((numSec % 31536000) % 86400) / 3600);
    let numMinutes = Math.floor((((numSec % 31536000) % 86400) % 3600) / 60);
    let numSeconds = (((numSec % 31536000) % 86400) % 3600) % 60;

    //make strings plural
    let yearsStr = (numYears>0)? `${numYears} years`: ``;
    let daysStr = (numDays)? `${numDays} days`: ``;
    let hoursStr = (numHours>0)? `${numHours} hours`: ``;
    let minutesStr = (numMinutes>0)? `${numMinutes} minutes`: ``; 
    let secondsStr = (numSeconds>0)? `${numSeconds} seconds`: ``;

    //make string singular
     yearsStr = (numYears==1)? `${numYears} year`: yearsStr;
     daysStr = (numDays==1)? `${numDays} day`: daysStr;
     hoursStr = (numHours==1)? `${numHours} hour`: hoursStr;
     minutesStr = (numMinutes==1)? `${numMinutes} minute`: minutesStr; 
     secondsStr = (numSeconds==1)? `${numSeconds} second`: secondsStr;

    //adding commas 
    let time = [yearsStr, daysStr, hoursStr, minutesStr, secondsStr];
    time = time.filter((v, i, a) => v!='' && a!='');
    const finalString = time.join(', ').replace(/, ([^,]*)$/, ' and $1');
       
    
    //final string format
    return finalString;

}

//examples
console.log(formatDuration(0));
console.log(formatDuration(-20));
console.log(formatDuration(62.2));
console.log(formatDuration(62));
console.log(formatDuration(3662));
console.log(formatDuration(2));
console.log(formatDuration(45646543621));
console.log(formatDuration(54621));
