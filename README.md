# cirbuf

> A tiny and fast circular buffer

- Minimal API
- Tiny size fit for the browser
- Fast

## Install

```sh
npm install --save cirbuf
```

## Usage

```js
// Import CircularBuffer
import { CircularBuffer } from "cirbuf"

// Create a buffer with a capacity of 10,000
let buffer = new CircularBuffer(10_000)

// Push 100,000 items
for (let i = 0; i < 100_000; i++) {
	buffer.push(i)
}

// Get the last 10,000 items as an array
let result = buffer.toArray()
// Note: `toArray` does not drain the buffer.
```

## Perf

Testing in comparison to a similar array implementation with `Array#push` and `Array#shift`:

```ts
array.push(i)
if (array.length > max) {
	array.shift()
}
```

```
# 100_000 iterations, max size 10_000
./benchmarks/array.js:      367.8 ops/sec (±2.5, p=0.001, o=5/100) severe outliers=3
./benchmarks/cirbuf.js:     5’984.3 ops/sec (±31.6, p=0.001, o=7/100) severe outliers=5

# 10_000_000 iterations, max size 1_000_000
./benchmarks/cirbuf-big.js: 47.7 ops/sec (±1.1, p=0.001, o=2/100)
```

> **Note:** Attempting to iterate 10,000,000 items in a 1,000,000 item array runs way too long, so I gave up benchmarking it
