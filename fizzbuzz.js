// FizzBuzz.js

//Count through from 1 to 20 and figure out if each is devisible by 3, 5, or both.

for (i = 1; i <= 20; i++) {
	//For each number do the following check:

	//See if it is divisible by 3
	if (i % 3 === 0) {
	//If so: See if it is ALSO divisible by 5
		if (i % 5 === 0) {
			//If divisible by 3 and 5: Print FizzBuzz
			console.log('FizzBuzz');
		} else {
			//If only divisible by 3: Print Fizz	
			console.log('Fizz');
		}	
	} else if (i % 5 === 0) {
		
		console.log('Buzz');
		//See if it is divisible by 5
		//If so: Print Buzz
	} else {
		console.log(i);
		//See if it is NOT divisible by 3 or 5
		//If so: Print number
	}
}


