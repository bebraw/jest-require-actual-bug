console.log('At custom mock');

const actualHocs = require.requireActual('@modular-toolkit/hocs');

console.log('Actual hocs in a mock', actualHocs);

const fs = jest.genMockFromModule('fs');

fs.readdirSync = () => 'demo';

module.exports = fs;
