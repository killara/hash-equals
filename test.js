'use strict';

const hashEquals = require('.');

describe('hash-equals', () => {
  test('has correct comparison', () => {
    expect(hashEquals('hash-equals', 'hash-equals')).toBe(true);
    expect(hashEquals('hash-equals', 'equals-hash')).toBe(false);
    expect(hashEquals('hash-equals', 'equals')).toBe(false);
  });

  test('shoud have both string arguments', () => {
    expect(() => hashEquals(null, 'hash-equals')).toThrow(/both arguments should be strings/);
    expect(() => hashEquals(null, undefined)).toThrow(/both arguments should be strings/);
  });
});
