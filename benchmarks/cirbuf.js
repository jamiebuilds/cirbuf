const { CircularBuffer } = require("../dist")

module.exports = () => {
	let buffer = new CircularBuffer(10_000)
	for (let i = 0; i < 100_000; i++) {
		buffer.push(i)
	}
	return buffer.toArray().length
}
