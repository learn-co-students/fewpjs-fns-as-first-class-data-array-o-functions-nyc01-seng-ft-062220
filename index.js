function wakeDog(dogName, dogBreed) {
    const statement = `Wake ${dogName} the ${dogBreed}`
    return statement
}

function leashDog(dogName, dogBreed) {
    const statement = `Leash ${dogName} the ${dogBreed}`
    return statement
}

function walkToPark(dogName, dogBreed) {
    const statement = `Walk to the park with ${dogName} the ${dogBreed}`
    return statement
}

function throwFrisbee(dogName, dogBreed) {
    const statement = `Throw the frisbee for ${dogName} the ${dogBreed}`
    return statement
}

function walkHome(dogName, dogBreed) {
    const statement = `Walk home with ${dogName} the ${dogBreed}`
    return statement
}

function unleashDog(dogName, dogBreed) {
    const statement = `Unleash ${dogName} the ${dogBreed}`
    return statement
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName,dogBreed) {
    const array = []
    for (let i = 0; i < routine.length; i++)  {
        const returnValue = routine[i](dogName,dogBreed)
        console.log(returnValue);
        array.push(returnValue);
    }
    return array;
}