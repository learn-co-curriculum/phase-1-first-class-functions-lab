// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2)
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2)
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num1) {
  return function (num1) {
    return num1 * num1;
  };
}

const fareDoubler = (num1) => num1 * 2;
const fareTripler = (num1) => num1 * 3;

function selectDifferentDrivers(drivers, gani) {
  if (gani === returnFirstTwoDrivers) {
    return drivers.slice(0, 2);
  } else {
    return drivers.slice(-2);
  }
}
