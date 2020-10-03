// PROBLEM No. 2

// Even Fibonacci numbers

/* Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms. */

function Fibonacci(){
    var fib = [0,1];
    var i = 0;
    var sum = 0;
    while (fib[0]+fib[1] < 4000000){
        i= fib[0]+fib[1];
        fib[0]=fib[1];
        fib[1]=i;
            if(i % 2 === 0){
            sum += i;
        }
    }
    console.log(sum);
}

Fibonacci();

