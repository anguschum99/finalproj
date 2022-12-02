import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  time = new Date();
  intervalId: NodeJS.Timer;

  ngOnInit(){
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);
  }
}
