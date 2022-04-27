import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Zen Cosmos';

  asteroidList = [];

  ngOnInit(): void {
    this.fetchData();
  }

  async fetchData() {
    const res = await fetch('http://localhost:5000/asteroids', {
      method: 'post',
      body: JSON.stringify({startDate: '2022-06-18'}),
      headers: {"Content-type": "application/json; charset=UTF-8"},    
    });
    const data = await res.json();

    console.log("data: ", data);
  }
}
