import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { calculate } from '@my-workspace/calculate';

@Component({
  selector: 'my-workspace-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  constructor() {
    console.log(calculate());
  }
}
