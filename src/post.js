Module['postRun'] = [];
Module['postRun'].push(function() {
  try {
    var output = FS.readFile('infile.nes');
    Module['resolve'](output);
  } catch(err) {
    Module['reject'](err);
  }
});
