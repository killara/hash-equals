# hash-equals

[![npm](https://img.shields.io/npm/v/hash-equals.svg)](https://www.npmjs.com/package/hash-equals)
[![npm download](https://img.shields.io/npm/dt/hash-equals)](https://www.npmjs.com/package/hash-equals)
[![Travis branch](https://img.shields.io/travis/killara/hash-equals/master.svg)](https://travis-ci.org/killara/hash-equals)
[![Codecov branch](https://img.shields.io/codecov/c/github/killara/hash-equals/master.svg)](https://codecov.io/github/killara/hash-equals?branch=master)

Timing attack safe string comparison

## Install

`npm i -S hash-equals`

## Usage

```javascript

const hashEquals = require('hash-equals');

const hash1 = '9uPtxDspyriqmxB0E6SPNNGaAtpQezhst7QWkakq';
const hash2 = '9uPtxDspyriqmxB0E6SPNNGaAtpQezhst7QWkakq';

if (hashEquals(hash1, hash2)) {
  console.log('do equal');
} else {
  console.log('do not equal');
}

```

## LICENSE

MIT License

Copyright (c) 2017 killara

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

