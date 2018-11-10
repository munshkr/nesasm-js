Module['preRun'] = [];
Module['preRun'].push(function() {
  FS.writeFile('infile.asm', Module['input']);
});
