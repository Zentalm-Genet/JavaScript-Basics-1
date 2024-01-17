// readline module wraps up the process standard output and process standard input objects
const readline = require('readline');

// the createInterface() method takes two arguments. The first argument will be for the standard input and the second one will be for reading the standard output. 

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// reader.question() method is used for asking questions from the user and reading their reply (output). 
reader.question("What would you like to calculate?", (input)=>{

	const value = input.split(' '); // The split() method splits a string into an array of substrings. The split() method returns the new array.
	
	const operation  = value[0];
	const num1 = Number(value[1]);
	const num2 = Number(value[2]);

	if (operation  === "+"){
		console.log(num1 + num2);
	}

	if (operation  === "-"){
		console.log(num1 - num2);	
	}

	if (operation  === "*"){
		console.log(num1 * num2);	
	}

	if (operation  === "/"){
		console.log(num1 / num2);	
	}

	if (operation  === "sqrt"){
		console.log(Math.sqrt(num1));		
	}

    // reader.close() method is used close the interface.
	reader.close()

});