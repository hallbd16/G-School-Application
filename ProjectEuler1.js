/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000. */

function multiples(maximum, multiple1 , multiple2) {
        var total=0;
        for (var i = 1; i < maximum; i++) {
            if ((i % multiple1 === 0) || (i % multiple2 === 0))
            {
                total += i;
            }
        }
        return total;
    };
multiples(1000, 3 , 5)