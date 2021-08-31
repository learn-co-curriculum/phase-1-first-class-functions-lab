// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => {
    return arr.slice(0,2)
}

const returnLastTwoDrivers = (arr) => {
    return arr.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function multiplier(num){
    return num*num
}

const createFareMultiplier = (fare) => {
    return function multiplier(num){
        return fare * num 
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, returnLastTwoDrivers){
    return returnLastTwoDrivers(drivers)
}