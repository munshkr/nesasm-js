Module['postRun'] = [];
Module['postRun'].push(function() {
  const output = FS.readFile('infile.nes');
  Module['resolve'](output);
});
