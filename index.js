const Module = require('./lib/nesasm.js');

module.exports = (input, opts) => {
  if (!opts) opts = {};

  // Print callback
  let logCb;
  if ('function' === typeof opts['log']) {
    logCb = opts['log'];
  } else {
    logCb = () => {};
  }

  return new Promise((resolve, reject) => {
    Module({
      'print': logCb,
      'printErr': logCb,
      'resolve': resolve,
      'reject': reject,
      'input': input,
      'arguments': ['infile.asm']
    });
  });
};
