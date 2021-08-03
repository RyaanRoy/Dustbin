class Paper {
  constructor(x, y, width, height, angle) {
    var options = { 
      'density': 1,
      'isStatic': false
    } 
      

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image=loadImage(paper.png);
    World.add(world, this.body);
  }

  display() {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    ellipse(0, 0, this.width, this.height);
    fill("255");
    pop();
  }
}