import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Zen Cosmos';

  constructor() {}

  ngOnInit(): void {
  }

  changeDate(event: any) {
    if (event.target.value == null) {
      this.startDate = new Date();
      return;
    };
    this.startDate = event.target.value;
  }

  startDate = new Date();
}
