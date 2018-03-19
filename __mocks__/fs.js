const fs = jest.genMockFromModule('fs');

console.log('At custom mock');

fs.readdirSync = () => 'demo';

module.exports = fs;
