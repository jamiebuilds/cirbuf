let iterations = 100_000
let max = 10_000

module.exports = () => {
	let array = []
	for (let i = 0; i < 100_000; i++) {
		array.push(i)
		if (array.length > 10_000) {
			array.shift()
		}
	}
	return array.length
}
