import hashEquals from "./src"

describe('hash-equals', () => {
  test('has correct comparison', () => {
    expect(hashEquals('hash-equals', 'hash-equals')).toBe(true);
    expect(hashEquals('hash-equals', 'equals-hash')).toBe(false);
    expect(hashEquals('hash-equals', 'equals')).toBe(false);
  });

  test('shoud have both string arguments', () => {
    expect(() => hashEquals(null as unknown as string, 'hash-equals')).toThrow(/both arguments should be strings/);
    expect(() => hashEquals(null as unknown as string, undefined as unknown as string)).toThrow(/both arguments should be strings/);
  });
});
