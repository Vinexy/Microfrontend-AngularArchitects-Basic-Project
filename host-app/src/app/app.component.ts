import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'host-app';

  handleCounter(){
    const customEvent = new Event("controlMfeCounter");
    window.dispatchEvent(customEvent);
    
  }

  constructor(private router: Router) {}

  redirectToTwo() {
    this.router.navigate(['/2']);
  }
}
