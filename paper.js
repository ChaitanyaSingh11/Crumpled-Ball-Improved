class Paper {
    constructor(x, y) {
        var options = {
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, 25, options);
        this.diameter = 50;
        World.add(world,this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        ellipseMode(CENTER);
        fill(255, 0, 133);
        noStroke();
        ellipse(pos.x, pos.y, this.diameter);
        pop();
    }
}