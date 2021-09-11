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
  Plugin,
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
    const windowWidth = window.innerWidth - 20;
    const windowHeight = window.innerHeight - 20;

    // create engine
    var engine = Engine.create(),
      world = engine.world;

    // create renderer
    var render = Render.create({
      element: document.body,
      engine: engine,
      options: {
        width: windowWidth,
        height: windowHeight,
      },
    });

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    var stack = Composites.stack(10, 0, 30, 15, 50, 0, function (
      x: number,
      y: number
    ) {
      return Bodies.circle(x, y, Common.random(1, 20), {
        friction: 0.00001,
        restitution: 0.5,
        density: 0.001,
      });
    });

    Composite.add(world, stack);
    Render.lookAt(render, Composite.allBodies(world));
  }
}
