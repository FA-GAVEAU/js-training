'use strict'

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 *
 * @notions Primitive and Operators, Functions, While
 */

// Your code :

function multiply(n, m) {
 	let total = 0;
 	let x = 0;
 	let y = 0;
  	if (n > 0) {
  		x = n;
  	}                              
  	else {
  		x = -n;
  	}                              
	if (m > 0) {
  		y = m;
  	}                              
  	else {
  		y = -m;
  	}
  	for (let i = 0; i < x; i++) {
    	total += y;
  	}
  	if (n === 0 || m === 0) {        
    	return 0;
  	}
  	else {
  		if (n > 0 && m > 0 || n < 0 && m < 0) {  
  			return total;
  		}
  		else {
  			return -total;
  		}
	}                         
}




//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
