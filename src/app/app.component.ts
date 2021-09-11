import { Component, OnInit } from '@angular/core';
import * as Matter from 'matter-js';

import { Plugin } from 'matter-js';
// Plugin.use(Matter, ['matter-wrap']);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'AngularAsteroids';

  // ngOnInit(): void {
  // Matter.use(MatterWrap);
  // console.log(Matter);
  // }
}
