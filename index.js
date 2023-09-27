
const returnFirstTwoDrivers = function(array){
    return array.slice(0, 2);
};

const returnLastTwoDrivers = function(array){
    return array.slice(-2);
};

let selectedDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(x){
    return function(fare){
        return fare * x;
    };
};
const fareDoubler = createFareMultiplier(2);
const fareTrippler  = createFareMultiplier(3);
const selectDifferentDrivers = function(array,x){
    return x(array)
}