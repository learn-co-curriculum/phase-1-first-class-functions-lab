const returnFirstTwoDrivers = function(drivers) {
    return [drivers[0], drivers[1]]
}

const returnLastTwoDrivers = function(drivers) {
    return [drivers[drivers.length-2], drivers[drivers.length-1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(riders) {
    return function(fare) {
        return Math.abs(fare * riders)
    }
}

const fareDoubler = function(fare){
    return Math.abs(fare*2)
}

const fareTripler = function(fare){
    return Math.abs(fare*3)
}

function selectDifferentDrivers(drivers, funct){
    return funct(drivers);
}
