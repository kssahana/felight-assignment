class Point {
    constuctor(x, y) {
        this.x = x;
        this.y = y;
    }
    static displayName = 'Point';
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
console.log(p1.displayName);
console.log(p1.distance);
console.log(p2.displayName);
console.log(p2.distance);

console.log(Point.displayName);
console.log(Point.distance(p1, p2));