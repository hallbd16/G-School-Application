<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>

<head>
<title>write example</title>

<script type="text/javascript">

/*  Algorithm
1. Have a loop push values to an empty array.
2. Stop the loop when the array is 10001 elements in length.
3. Write the last element of the array.
*/


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
</head>

<body>

</body>
</html>

<!--   
Notes about the process:
Initially, I chose to use a 'for loop,' but decided I did not like the limitations of the exit condition that comes along with 'for loops.' 
So I decided to use a 'while loop.' This allowed me to set the exit condition when the array is has 10001 elements. 
I seemed to have bugs when I did this, perhaps because the array length is not defined at the start of the 'while loop'. 
So finally, I switched to 'do...while loop' which allowed me the chance to define the array.length before I tested the condition. 

Debrief thoughts:
There is a more efficient way to solve than by using arrays. 
Rather set a counter in the pushPrime function that adds one to the counter when it is a prime number. 
Set the condition of the 'while loop' to break when the counter is at the 100001st term and write that n value.
The reason I chose to submit the code as it is, is because it demonstrates a greater use of javascript basic skills.  
-->