const math = require('./math');

it('should compute values correctly', () => {
	expect(math.sum(1, 2)).toBe(3);
	expect(math.sum(-1, -2)).toBe(-3);
	expect(math.sum(-1, 1)).toBe(0);
});

it('should compute values correctly', () => {
	expect(math.div(1, 2)).toBe(0.5);
	expect(math.div(-1, -2)).toBe(0.5);
	expect(math.div(-1, 1)).toBe(-1);
});

it('should compute values correctly', () => {
	expect(math.mod(1, 2)).toBe(1);
	expect(math.mod(-3, -2)).toBe(-1);
	expect(math.mod(7, 4)).toBe(3);
});
