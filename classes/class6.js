class Rectangle {
    #height = 0;
    #width;
    constructor(height, width) {
        this.#height = height;
        this.#width = width;
    }
    getHeight() {
        return this.#height;
    }
    getWidth() {
        return this.#width;
    }
}
var rect = new Rectangle(5, 4);
console.log(rect.getHeight());
console.log(rect.getWidth());