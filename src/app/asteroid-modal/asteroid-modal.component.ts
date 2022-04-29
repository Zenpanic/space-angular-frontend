import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Asteroid } from '../Asteroid';

@Component({
  selector: 'app-asteroid-modal',
  templateUrl: './asteroid-modal.component.html',
  styleUrls: ['./asteroid-modal.component.css']
})
export class AsteroidModalComponent {

  constructor(
    public dialogRef: MatDialogRef<AsteroidModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Asteroid) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
