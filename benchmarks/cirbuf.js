let { CircularBuffer } = require("../dist")

let iterations = 100_000
let max = 10_000

module.exports = () => {
	let buffer = new CircularBuffer(max)
	for (let i = 0; i < iterations; i++) {
		buffer.push(i)
	}
	return buffer.toArray().length
}
