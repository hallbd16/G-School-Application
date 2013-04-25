/*By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number? */

//IS IT A PRIME NUMBE FUNCTION
/*function isNumberPrime(n) {
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



//TO FIND 1001 PRIME NUMBER
//determine if value is prime number, if yes push it to array, stop the process when the array is 10001 big (position 1000 on array index)
//consider a do while loop because that does the action first then checks to see if the condition is true before doing again BIG WIN.  THIS WAS THE ISSUE, having a do while allowed me to create a condition to test(array.length)
//
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;
<html xmlns="http://www.w3.org/1999/xhtml"&gt;
 
<head>
    <title>Project Euler 002</title>
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

