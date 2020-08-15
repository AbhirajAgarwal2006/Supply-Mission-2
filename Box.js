class Box {
    constructor(x, y, width, height) {
      var options = {
          'friction':0.3,
          'density':1,
          'isStatic': true
      }
      this.body = Bodies.rectangle(x, y, 80, 10, options);
      this.width = 80;
      this.height = 10;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rect(0, 0, this.width, this.height);
    }
  }