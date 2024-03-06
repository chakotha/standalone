import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `<Button (click)="this.Increment()"
    >Clicks now = {{ this.counter }}</Button
  >`,
})
export class AppComponent {
  counter: number = 0;
  Increment = () => this.counter++;
}
