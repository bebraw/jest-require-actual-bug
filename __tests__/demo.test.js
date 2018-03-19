const demo = require('../');

// This should trigger custom mock
jest.mock('fs');

// This should give actual hocs
const actualHocs = require.requireActual('@modular-toolkit/hocs');

console.log('Actual hocs in a test', actualHocs);

test('demo to equal 42', () => {
  expect(demo()).toBe(42);
});
