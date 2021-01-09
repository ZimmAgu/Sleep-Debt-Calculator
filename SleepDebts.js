//////////////////////////////////////
//  Sleep Debt Caluculator Project  //
//      from Codecademy             //
//////////////////////////////////////








/*
    This function determines how much sleep 
    I got each night of the week
*/
const getSleepHours = day => {

    /* 
        The number returned is 
        the amount of hours of sleep I got that day
    */
    switch (day) {

        case `Sunday`:
            return 9;
        
        case `Monday`:
            return 4;
        
        case `Tuesday`:
            return 6;
        
        case `Wednesday`:
            return 7;
        
        case `Thursday`:
            return 5;
        
        case `Friday`:
            return 3;
        
        case `Saturday`:
            return 10;
    }

} // End of getSleepHours function













/*
    This function determines how much sleep 
    I got for the entier week
*/
const getActualSleepHours = () => {

    // Returns the sleep hours of each day combined
    return  getSleepHours(`Sunday`) 
            + getSleepHours(`Monday`)
            + getSleepHours(`Tuesday`)
            + getSleepHours(`Wednesday`)
            + getSleepHours(`Thursday`)
            + getSleepHours(`Friday`)
            + getSleepHours(`Saturday`);
    
} // End of getActualSleepHours function




















/*
    This function determines the
    ideal hour of sleep I woul like to get
    in a week
*/
const getIdealSleepHours = () => {

    // Ideally, I would get 7 hours of sleep per day
    let idealHours = 7;

    
    // Which comes out to 49 hours of sleep per week
    return idealHours * 7;

} // End of getIdealSleepHours function


















/*
    This is the function that actually calculates the sleep debt
*/
const CalculateSleepHours = () => {


    // The variable actualSleepHours is now equal to 44
    const actualSleepHours = getActualSleepHours();



    // The variable idealSleepHours is now equal to 49
    const idealSleepHours = getIdealSleepHours();


    const sleep_Debt = idealSleepHours - actualSleepHours;


    /*
        Prints a message to the console
        depending on how actual sleep and ideal sleep
        relate to each other
    */
    if (actualSleepHours == idealSleepHours) {

        console.log(`You got an ideal amount of sleep!`);  

    } else if (actualSleepHours > idealSleepHours) {

        console.log(`You got ${sleep_Debt} hours more sleep than needed.`);

    } else if (actualSleepHours < idealSleepHours) {
    
        console.log(`You should get ${sleep_Debt} more hours of rest.`);

    }

    

} // End of CalculateSleepHours function


// Lets the user know about their sleep debt
CalculateSleepHours();

