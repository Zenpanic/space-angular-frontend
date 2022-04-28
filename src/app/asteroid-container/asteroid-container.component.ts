import { Component, Input, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { AsteroidService } from '../asteroid.service';
import { Asteroid } from '../Asteroid';

@Component({
  selector: 'app-asteroid-container',
  templateUrl: './asteroid-container.component.html',
  styleUrls: ['./asteroid-container.component.css']
})
export class AsteroidContainerComponent implements OnInit {

  @Input() startDate!: Date;

  constructor(private asteroidService: AsteroidService) { }

  asteroidList!: Asteroid[];

  columnsToDisplay = ['id', 'name', 'diameter_min', 'diameter_max', 'is_dangerous', 'relative_velocity', 'miss_distance', 'link'];

  ngOnInit(): void {
    this.fetchAsteroids();
  }

  ngOnChanges(changes: SimpleChange): void {
    this.asteroidService.getAsteroids(this.startDate).subscribe(asteroids => this.asteroidList = asteroids);
  }

  fetchAsteroids() {
    this.asteroidService.getAsteroids(this.startDate).subscribe(asteroids => this.asteroidList = asteroids);
  }

}
