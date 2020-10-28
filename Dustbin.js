class dustbin {
    constructor() {
        var options = {
            isStatic: true
        };
        this.r = Bodies.rectangle(750, 500, 20, 160, options);
        this.l = Bodies.rectangle(900, 500, 20, 160, options);
        this.b = Bodies.rectangle(825, 570, 130, 20, options);
        this.w = 20;
        this.h = 160;
        World.add(world, [this.r, this.l, this.b]);
    }
    display() {
        var rpos = this.r.position;
        var lpos = this.l.position;
        var bpos = this.b.position;
        push();
        noStroke();
        translate(rpos.x, rpos.y);
        fill(255, 0, 0, 85);
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop();

        push();
        noStroke();
        translate(lpos.x, lpos.y);
        fill(255, 0, 0, 85);
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop();

        push();
        noStroke();
        translate(bpos.x, bpos.y);
        fill(255, 0, 0, 85);
        rectMode(CENTER);
        rect(0, 0, this.w+110, this.h-140);
        pop();
    }
}