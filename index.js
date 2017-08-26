'use strict';

const assert = require('assert');

const hashEquals = (answer, guess) => {
  assert(typeof answer === 'string' && typeof guess === 'string', 'both arguments should be strings');

  const len = answer.length;

  let resultBits = 0;

  if (len !== guess.length) {
    guess = answer;
    resultBits = 1;
  }

  for (let i = 0; i < len; ++i) {
    resultBits |= (answer.charCodeAt(i) ^ guess.charCodeAt(i));
  }

  return resultBits === 0;
};

module.exports = hashEquals;
