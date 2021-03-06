# nesasm-js

nesasm-js is a JavaScript version of NESASM3, a NES assembler written in C.

The source code was based off bunnyboy's modifications of the original NESASM,
available [here](http://www.nespowerpak.com/nesasm/NESASM3.zip).

Main differences from the original:
  * PC-Engine support was removed
  * Uses CMake as build tool

Uses [Emscripten](https://kripken.github.io/emscripten-site/) to compile C code
into JavaScript and WebAssembly.

## Usage

```javascript
let assemble = require('nesasm-js')

let source = `
  .org $8000

MyFunction:
  lda #$FF
  jmp MyFunction
`;

assemble(source, { log: text => console.log('stdout: ' + text) })
  .then(buffer => console.log(buffer));
// stdout: NES Assembler (v3.1)
// stdout: 
// stdout: pass 1
// stdout: pass 2
// > Uint8Array [
//  78,
//  69,
//  83,
//  26,
//  0,
//  0,
// ... 8202 more items ]
```

## To-do

* Better error handling
* Support for assembler options (output listing, etc.)
* Tests, documentation

## Development

You will need to have the Emscripten SDK installed and with your environment
setup.

After cloning the repostory, run `npm install` to install dependencies and then
`npm run build` to compile in Release mode (with optimizations enabled).  For
development, it is recommended to build it with `npm run build:debug` to
disable optimizations and minifications.

## License

Source code is released under GPL 3+. Please refer to the
[LICENSE.md](LICENSE.md) file.

The contents of the directory `nesasm/` is released under the following license
notice: NESASM is freeware. You are free to distribute, use and modifiy it as
you wish.

Original 6502 version by:
* J. H. Van Ornum

NES version by:
* Charles Doty

Further modifications by:
* bunnyboy, from [RetroUSB](https://www.retrousb.com/)
