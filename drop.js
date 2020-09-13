class Plinko {

  constructor(x, y) {

      var options = {

          /*restitution: 1,

          friction: 0,*/

          isStatic:false

      }

      this.r = 10;

      this.body = Bodies.circle(x, y, this.r, options);

      World.add(world, this.body);

  }

  display() {

      var pos = this.body.position;

      var angle = this.body.angle;

      push();

      translate(pos.x, pos.y);

      rotate(angle);

      imageMode(CENTER);

      noStroke();

      fill("white");

      ellipseMode(RADIUS);

      ellipse(this.position);

      pop();

  }

  update() {

    var dropcrossed = "drops/drop" ;

    database.ref(dropsposition).set({

        position : this.position

    })

    /*var playerIndex = "players/player" + this.index;

    database.ref(playerIndex).set({

       name: this.name,

      distance: this.distance,

        score:this.score

    });*/

}

};
