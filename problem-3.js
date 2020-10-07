/* Largest prime factor

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
 */

function largestPrimeFactor(number){
    let primesFactor = [];
    for(iterator = 500000000000; iterator <= number; iterator++){
        let isFactor = number % iterator === 0;
        let prime = true;

        if(isFactor){
            for(i = 2; i < iterator; i++ ){
                if(iterator % i === 0){
                    prime = false;
                }
            }
        }
        if(isFactor && prime){
            primesFactor.push(iterator);
        }
    }
    return primesFactor.pop();
}
console.log(largestPrimeFactor(600851475143));
