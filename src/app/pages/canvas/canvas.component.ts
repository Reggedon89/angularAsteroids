import { Component, OnInit } from '@angular/core';
import {
  Engine,
  Runner,
  Render,
  Common,
  Composite,
  Composites,
  Constraint,
  MouseConstraint,
  Mouse,
  Bodies,
  Body,
  Plugin,
  Vertices,
} from 'matter-js';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.sass'],
})
export class CanvasComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.canvas();
  }
  canvas() {
    var engine = Engine.create();
    var world = engine.world;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;


    // create engine
    var engine = Engine.create();
    var world = engine.world;

    // create renderer
    var render = Render.create({
      element: document.body,
      engine: engine,
      options: {
        width: windowWidth,
        height: windowHeight,
      },
    });
    var wallStyle = {
      fillStyle: 'transparent',
      strokeStyle: 'transparent',
      lineWidth: 0
};
    var wallOptions = {
      isStatic: true,
      render: wallStyle,
      restitution: 0.9,
      density:0.001,
      frictionStatic: 10,
      inverseInertia:0,
      frictionAir: 0,
    };
    var topWall = Bodies.rectangle(windowWidth/2, 0-25, windowWidth, 60, wallOptions);
    var leftWall = Bodies.rectangle(0-25, windowHeight/2, 60, windowHeight, wallOptions );
    var rightWall = Bodies.rectangle(windowWidth+25, windowHeight/2, 60, windowHeight, wallOptions);
    var bottomWall = Bodies.rectangle(windowWidth/2, windowHeight+25, windowWidth, 60, wallOptions);
    
    Render.run(render);
    // create runner

    var runner = Runner.create();
    Runner.run(runner, engine);
    engine.gravity.y = .01;
    engine.gravity.x = .0001;

    // add bodies
    var positionx = Math.floor(Math.random() * windowWidth) + 1
    var body = Body.create({})
    var asteroidCount = 5



    for (let i = 0; i <= asteroidCount; i++){
      setTimeout(function() {

      var lAsteroids = function ()  {
        var largeAsteroids = Vertices.fromPath('39.9,21.1 39.9,15 39.9,12.9 38.8,6.5 33.6,2.6 17.5,1 11.6,1.8 6.4,5.3 0.8,19.6 1.5,25.4 3,36.2 6.9,42.1 8.6,43.8 13.7,47.6 17.3,47.7 22.4,47 35.6,41.3 38.1,38.3 39.3,34.7 39.7,30',body);
        return  Bodies.fromVertices(positionx, 20, Common.choose([largeAsteroids]), {
            density: 0.01,
            friction: 0,
            frictionStatic: 0,
            frictionAir: 0,
            restitution: 1,
            render: {

            } 
    });
  }

Composite.add(world, [topWall, leftWall,rightWall,bottomWall, lAsteroids()]);
    },500 *i)
    }
  }
}
