import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.sass'],
})
export class ShipComponent implements OnInit {
  ship = 'Shippy ship';
  constructor() {}

  ngOnInit(): void {}
}
