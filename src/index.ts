export class CircularBuffer<T> {
	#data: Array<T>
	#next: number = 0
	#overflow: boolean = false
	#maxSize: number

	constructor(maxSize: number) {
		this.#data = new Array(maxSize)
		this.#maxSize = maxSize
	}

	get maxSize(): number {
		return this.#maxSize
	}

	get size(): number {
		return this.#overflow ? this.#maxSize : this.#next
	}

	push(value: T): void {
		this.#data[this.#next] = value
		if (this.#next === this.#maxSize - 1) {
			this.#next = 0
			this.#overflow = true
		} else {
			this.#next += 1
		}
	}

	toArray(): Array<T> {
		if (!this.#overflow) {
			// Create a copy of the array
			return this.#data.slice(0, this.#next)
		}
		return this.#data.slice(this.#next).concat(this.#data.slice(0, this.#next))
	}
}
