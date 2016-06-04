function factorial (n) {
	if (n % 1 == 0) {
		if (n > 0) {
			return n * factorial(n - 1);
		} else {
			return 1;
		} 
	} else {
		return -1;
	}
}
QUnit.test('Prueba factorial', function( assert ) {
	assert.equal(factorial(6), 720, "Correcto!" );
	assert.equal(factorial(1), 1, "Correcto!" );
	assert.equal(factorial(0), 1, "Correcto!" );
	assert.equal(factorial(5), 120, "Correcto!" );

});