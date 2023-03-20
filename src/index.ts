export class CircularBuffer<T> {
	#data: Array<T>
	#next: number
	#size: number
	#maxSize: number

	constructor(maxSize: number) {
		this.#data = new Array(maxSize)
		this.#next = 0
		this.#size = 0
		this.#maxSize = maxSize
	}

	get maxSize(): number {
		return this.#maxSize
	}

	get size(): number {
		return this.#size
	}

	push(value: T): void {
		this.#data[this.#next] = value

		if (this.#size !== this.#maxSize) {
			this.#size += 1
		}

		if (this.#next === this.#maxSize - 1) {
			this.#next = 0
		} else {
			this.#next += 1
		}
	}

	toArray(): Array<T> {
		if (this.#size < this.#maxSize) {
			// Create a copy of the array
			return this.#data.slice(0, this.#size)
		}

		let end = this.#data.slice(0, this.#next)
		let start = this.#data.slice(this.#next)

		return start.concat(end)
	}
}
