/*By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 100001st prime number?
*/

//Is it a prime number function.  Note: t\urned out to be unnecessary in for the final code, but helpful for me nevertheless.
function isNumberPrime(n) {
    if(n<2) {
        return false;
    }
    for(i=2 ; i<n ; i++) {
        if (n%i === 0) {
            return false ;
			break;
		} 
	}
    return true;
};	


/*Find 10001 prime algorithm plan 
1. Determine if value is prime number,
2.  If yes push it to array, stop the process when the array is 10001 big (position 1000 on array index)
*/
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;
<html xmlns="http://www.w3.org/1999/xhtml"&gt;
 
<head>
    <title>Project Euler 007</title>
</head>
<body >
    <script type="text/javascript">
var primeArray = [];
var n = 2;
do {
function pushPrime(n) {
        for(i=2 ; i<n ; i++) {
            if (n%i === 0) {
                return false ;
			    break;
	    	} 
    	}
        return true;
    }
    if (pushPrime(n) === true) {
        primeArray.push(n);  
    }
    n ++;
} while (primeArray.length<10001);


document.write("the 10001 prime number is: " + primeArray[primeArray.length-1]);


    </script>
</body>
</html>


/*  Debrief
Initially, I tried to solve only using 'for loops,' but decided I did not like the limitations of the exit condition that comes along with 'for loops.' 
So I decided to use a 'while loop.' This allowed me to set the exit condition when the array is has 10001 elements. 
I seemed to have bugs when I did this, perhaps because I did not define the array length at the start of the 'while loop'. 
So finally, I switched to 'do...while loop' which allowed me the chance to define the array.length before I tested the condition.

Reflecting on my algorithm, I think I see a more efficient way to solve than by using arrays. 
Rather set a counter in the pushPrime function that adds one to the counter when it is a prime number. 
Set the condition of the 'while loop' to break when the counter is at the 100001st term and write that n value.

*/

