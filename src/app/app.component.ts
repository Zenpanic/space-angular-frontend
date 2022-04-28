import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Zen Cosmos';
  public startDate: Date = new Date();

  constructor() {}

  ngOnInit(): void {
  }

  changeDate(event: any) {
    if (event == null) {
      this.startDate = new Date();
      return;
    };
    this.startDate = event;
  }  
}

// TO ADD

// Question mark icon on right of toolbar, with a modal explaining what the app is about.
// Footer with zentown info
// Click on an asteroid opens modal with a bit more info (max/min diameter, link to nasa, id)
// Colors