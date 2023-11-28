import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FooterComponent } from '@my-workspace/footer';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, FooterComponent],
  selector: 'my-workspace-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'admin';
}
