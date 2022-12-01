import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  currentDate = new Date();
  timestamp = this.currentDate.toLocaleString('en-US', 
  {month:'short', day:'2-digit', 
  year:'numeric', hour:'numeric', minute:'numeric'});

}
