const drivers = function(){
    return ['Sally', 'Bob', 'Freddy', 'Claudia']
}

function returnFirstTwoDrivers (drivers){ return [drivers[0],drivers[1]];}
//const returnFirstTwoDrivers = ([driv1,driv2,driv3,driv4])=> ([driv1,driv2]);  // Code your solution in this file!



const returnLastTwoDrivers = (drivers)=> ([drivers[2],drivers[3]]);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]; 

function createFareMultiplier(){
    return function (fare){return fare * fare}
}

const farePrice = function(){      //Variable created to stored the function output
    return createFareMultiplier();
}

function fareDoubler(farePrice) { //Calling the previous var output to then apply the doubling operation
    return (farePrice * 2);
}

function fareTripler(farePrice) { 
    return (farePrice * 3);
}

function selectDifferentDrivers(drivers, choice){
        if (choice === returnLastTwoDrivers){
            return returnLastTwoDrivers(drivers);
        }
        else if(choice === returnFirstTwoDrivers){
            return returnFirstTwoDrivers(drivers);
        }
           return choice(drivers);
    }
    
    
    
