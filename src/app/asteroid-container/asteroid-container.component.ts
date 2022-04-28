import { Component, Input, OnInit, SimpleChange, ViewChild } from '@angular/core';
import { AsteroidService } from '../asteroid.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-asteroid-container',
  templateUrl: './asteroid-container.component.html',
  styleUrls: ['./asteroid-container.component.css']
})
export class AsteroidContainerComponent implements OnInit {

  @Input() startDate!: Date;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  dataSource = new MatTableDataSource();

  constructor(private asteroidService: AsteroidService) { }

  columnsToDisplay = ['id', 'name', 'approx_diameter', 'is_dangerous', 'relative_velocity', 'miss_distance'];

  ngOnInit(): void {
   this.dataSource.paginator = this.paginator;
   /* this.fetchAsteroids(this.startDate); */
  }

  ngOnChanges() {
    this.fetchAsteroids(this.startDate)
  }

  fetchAsteroids(startDate: Date) {
    this.asteroidService.getAsteroids(startDate).subscribe(asteroids => this.dataSource.data = asteroids);
  }
}