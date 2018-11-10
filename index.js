const Module = require('./lib/nesasm.js')

module.exports = input => {
  return new Promise((resolve, reject) => {
    Module({
      'input': input,
      'resolve': resolve,
      'arguments': ['infile.asm']
    });
  });
}
