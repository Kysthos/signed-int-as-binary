function int32AsBinary(n, leadingZero = true) {
  if (!Number.isInteger(n))
    throw new TypeError(`${n} is not an integer.`)
  const MIN = -(2 ** 31);
  const MAX = 2 ** 31 - 1;
  if (MIN > n || n > MAX)
    throw new RangeError(`Only integers between ${MIN} and ${MAX} allowed.`)
  const bin = (n >>> 0).toString(2);
  return `${leadingZero ? '0'.repeat(32 - bin.length) : ''}${bin}`;
}

function intAsBinary(n, bits = 32, leadingZero = true) {
  if (typeof n !== 'bigint' && !Number.isInteger(n))
    throw new TypeError(`${n} is not an integer.`)
  if (typeof n !== 'bigint' && !Number.isSafeInteger(n))
    throw new TypeError(`${n} is not a safe integer. Use BigInt instead.`)
  let bi;
  // not efficient :P
  if (
    typeof n === 'bigint' ||
    !Number.isSafeInteger(-(2 ** bits)) ||
    !Number.isSafeInteger(2 ** bits - 1)
  ) {
    bi = true;
    bits = BigInt(bits)
    n = BigInt(n)
  };
  // this is stupid... but works...
  const one = bi ? 1n : 1
  const two = bi ? 2n : 2
  const MIN = -(two ** (bits - one));
  const MAX = two ** (bits - one) - one;
  if (MIN > n || n > MAX)
    throw new RangeError(`${bits}-bit signed integer should be between ${MIN} and ${MAX}.`)
  if (n > 0) {
    const bin = n.toString(2);
    return `${leadingZero ? '0'.repeat(Number(bits) - bin.length) : ''}${bin}`;
  }
  if (n < 0) {
    const positive = (MIN * -one + n).toString(2);
    return `1${'0'.repeat(Number(bits) - 1 - positive.length)}${positive}`;
  }
  return '0'.repeat(Number(bits));
}

module.exports = {
  int32AsBinary,
  intAsBinary
}
