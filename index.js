const dogName = "Byron"
const dogBreed = "poodle"


function wakeDog (dogName, dogBreed){
    console.log(`Wake ${dogName} the ${dogBreed}`)
    return `Wake ${dogName} the ${dogBreed}`
};

function leashDog (dogName, dogBreed){
    console.log(`Leash ${dogName} the ${dogBreed}`)
    return `Leash ${dogName} the ${dogBreed}`
};

function walkToPark (dogName, dogBreed){
    let park = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(park)
    return park
};

function throwFrisbee (dogName, dogBreed){
    let frisbee = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(frisbee)
    return frisbee
};

function walkHome (dogName, dogBreed){
    let walk = `Walk home with ${dogName} the ${dogBreed}`
    console.log(walk)
    return walk
};

function unleashDog (dogName, dogBreed){
    let unleash = `Unleash ${dogName} the ${dogBreed}`
    console.log(unleash)
    return unleash
};

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog (dogName, dogBreed){
    return routine.map(fn => fn(dogName, dogBreed))
}