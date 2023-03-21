let iterations = 100_000
let max = 10_000

module.exports = () => {
	let array = []
	for (let i = 0; i < iterations; i++) {
		array.push(i)
		if (array.length > max) {
			array.shift()
		}
	}
	return array.length
}
