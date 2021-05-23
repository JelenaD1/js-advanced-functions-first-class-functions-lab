function returnFirstTwoDrivers(drivers){
    const newArray = [drivers[0], drivers[1]]
     return newArray
}

function returnLastTwoDrivers(drivers){
    const newArray = [drivers[2], drivers[3]]
    return newArray
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(name){
    return function(){return name * name}

}

function fareDoubler(argument){
    return argument * 2
}

function fareTripler(command){
    return command * 3

}

function selectDifferentDrivers(arrayOfDrivers, secondArgument){
    return secondArgument(arrayOfDrivers)
    
}