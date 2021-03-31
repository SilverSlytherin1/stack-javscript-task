// Your implementation goes here
const Stack = class Stack {
    stack = null

    constructor() {
        for (let argument of arguments) {
            if (!this.stack) {
                this.stack = []
            }
            this.stack.push(argument)
        }
        this.stack?.reverse()
    }

    get size() {
        return this.stack?.length || 0
    }

    push(el) {
        this.stack = [el].concat(this.stack || [])
    }

    isEmpty() {
        return !this.stack?.length
    }

    pop() {
        return this.stack?.splice(0, 1)[0] || null
    }

    peek() {
        return this.stack?.slice(0, 1)[0] || null
    }

    swap() {
        if (this.stack?.length >= 2) {
            this.stack = this.stack.splice(0, 2).reverse().concat(this.stack)
        }
    }
}

module.exports = Stack