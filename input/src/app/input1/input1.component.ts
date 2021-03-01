import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input1',
  templateUrl: './input1.component.html',
  styleUrls: ['./input1.component.css'],
})
export class Input1Component implements OnInit {
  text: string = '';
  constructor() {}

  ngOnInit(): void {}

  onEnter(element: string) {
    this.text = element;
  }
}
