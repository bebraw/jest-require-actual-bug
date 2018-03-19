const demo = require('../');

// This should trigger custom mock
jest.mock('fs');

// This should give actual fs
const actualFs = require.requireActual('fs');

console.log('Actual fs', actualFs);

test('demo to equal 42', () => {
  expect(demo()).toBe(42);
});
