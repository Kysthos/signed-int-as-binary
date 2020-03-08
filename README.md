# signed-int-as-binary

**`intAsBinary(num[, bits[, leadingZeroes]])`**
* `num` \<integer> | \<BigInt>
* `bits` \<integer> [default: `32`]
* `leadingZeroes` \<Boolean> [default: `true`]
* Returns \<string>

```js
console.log(intAsBinary(0, 8))
console.log(intAsBinary(~0, 8))
console.log(intAsBinary(256, 16))
console.log(intAsBinary(~256, 16))
console.log(intAsBinary(2 ** 31 -1, 32))
console.log(intAsBinary(~(2 ** 31 -1), 32))
console.log(intAsBinary(1234546758759876n, 64))
console.log(intAsBinary(~1234546758759876n, 64))

// 00000000
// 11111111
// 0000000100000000
// 1111111011111111
// 01111111111111111111111111111111
// 10000000000000000000000000000000
// 0000000000000100011000101101000001010001000000111011010111000100
// 1111111111111011100111010010111110101110111111000100101000111011
```
