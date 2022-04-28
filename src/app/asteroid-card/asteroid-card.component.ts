import { Component, OnInit, Input } from '@angular/core';
import { Asteroid } from '../Asteroid';

@Component({
  selector: 'app-asteroid-card',
  templateUrl: './asteroid-card.component.html',
  styleUrls: ['./asteroid-card.component.css']
})
export class AsteroidCardComponent implements OnInit {

  @Input() asteroid!: Asteroid;

  constructor() { }

  ngOnInit(): void {
  }

}
