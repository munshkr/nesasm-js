const assert = require('assert');
const fs = require('fs');

const assemble = require('../index.js');

async function assertThrowsAsync(fn, regExp) {
  let f = () => {};
  try {
    await fn();
  } catch(e) {
    f = () => {throw e;};
  } finally {
    assert.throws(f, regExp);
  }
}

describe('assemble()', () => {
  it('should assemble succesfully when provided a valid program', async () => {
    const source = fs
      .readFileSync('test/fixtures/valid.asm', { encoding: 'utf-8' });
    const binary = await assemble(source);
    const buffer = new Buffer(binary);

    const expectedBuffer = fs.readFileSync('test/fixtures/valid.nes');
    assert(buffer.equals(expectedBuffer));
  });

  it('should fail to assemble when provided an invalid program', () => {
    assertThrowsAsync(() => assemble('[invalid assembly code]'));
  });
});
