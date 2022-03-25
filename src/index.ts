// Reimplement according to Brad Hill's Double HMAC pattern
// https://www.nccgroup.trust/us/about-us/newsroom-and-events/blog/2011/february/double-hmac-verification/

import assert from "assert"
import crypto from "crypto"

const hashEquals = (answer:string, guess:string) => {

  assert(typeof answer === 'string' && typeof guess === 'string', 'both arguments should be strings');

  const rb = crypto.pseudoRandomBytes(32);
  const ahmac = crypto.createHmac('sha256', rb).update(answer).digest('hex');
  const ghmac = crypto.createHmac('sha256', rb).update(guess).digest('hex');

  const len = ahmac.length;

  let result = 0;
  for (let i = 0; i < len; ++i) {
    result |= (ahmac.charCodeAt(i) ^ ghmac.charCodeAt(i));
  }
  return result === 0;
};

export default hashEquals
