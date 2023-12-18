//function to calculate demerit points using speed as the input
function calculateDemeritPoints(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;

    if ( speed < speedLimit ){
        return 'ok'
    }
    const point = Math.floor(speed - speedLimit/kmPerPoint)
    //math.floor is used to roundoff the number to the nearest whole number
    if ( points > 12 ){
        return 'License suspended'
    }
    
    else{
    return 'Points: " + points'}
}
console.log(calculateDemeritPoints());