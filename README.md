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
const buffer = new CircularBuffer(10_000)

// Push 100,000 items
for (let i = 0; i < 100_000; i++) {
	buffer.push(i)
}

// Get the last 10,000 items as an array
const result = buffer.toArray()
// Note: `toArray` does not drain the buffer.
```
