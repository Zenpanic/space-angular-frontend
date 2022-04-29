import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AsteroidService } from '../asteroid.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AsteroidModalComponent } from '../asteroid-modal/asteroid-modal.component';
import { Asteroid } from '../Asteroid';

@Component({
  selector: 'app-asteroid-container',
  templateUrl: './asteroid-container.component.html',
  styleUrls: ['./asteroid-container.component.css']
})
export class AsteroidContainerComponent implements OnInit {

  @Input() startDate!: Date;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  dataSource = new MatTableDataSource();
  dataLength: number = 0;
  showSpinner: boolean = true;

  constructor(private asteroidService: AsteroidService, public dialog: MatDialog) { }

  columnsToDisplay = ['id', 'name', 'approx_diameter', 'is_dangerous', 'relative_velocity', 'miss_distance'];

  ngOnInit(): void {
   this.dataSource.paginator = this.paginator;
  }

  ngOnChanges() {
    this.fetchAsteroids(this.startDate)
  }

  fetchAsteroids(startDate: Date) {    
    this.showSpinner = true;
    this.asteroidService.getAsteroids(startDate).subscribe(asteroids => 
      {
        if (asteroids) this.showSpinner = false;
        this.dataSource.data = asteroids});    
  }

  openAsteroid(data: Asteroid): void {
    const dialogRef = this.dialog.open(AsteroidModalComponent, {
      width: '300px',
      data: data
    });
  }
}