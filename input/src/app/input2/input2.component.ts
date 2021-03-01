import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input2',
  templateUrl: './input2.component.html',
  styleUrls: ['./input2.component.css'],
})
export class Input2Component implements OnInit {
  // @Output('newName') newName = new EventEmitter<any>();

  heroes: string[] = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  constructor() {}

  ngOnInit(): void {}

  onNewName(element: string) {
    this.heroes.push(element);
  }
}
