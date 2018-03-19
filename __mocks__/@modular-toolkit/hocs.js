// This should give actual hocs
const actualHocs = require.requireActual('@modular-toolkit/hocs');

console.log('Actual hocs in a hocs mock', actualHocs);

module.exports = {
    foo: 42 // XXX: Used by requireActual after this
};
