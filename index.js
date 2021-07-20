let returnFirstTwoDrivers = (driversArr1) => {
    const copyDriversArray1 = [...driversArr1]
    return copyDriversArray1.slice(0, 2)
}

let returnLastTwoDrivers = (lastTwoArray) => {
    const driversArray = [...lastTwoArray]
    return driversArray.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer){
    return fare => fare * integer;
}

function fareDoubler(fare) {
    return fare * 2;
}

function fareTripler(fare) {
    return fare * 3;
}

function selectDifferentDrivers(driversArray, firstTwoDrivers) {
    return firstTwoDrivers(driversArray);
}