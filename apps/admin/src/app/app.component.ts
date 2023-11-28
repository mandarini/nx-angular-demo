import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FooterComponent } from '@my-workspace/footer';
import { ContainerComponent } from '@my-workspace/container';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    FooterComponent,
    ContainerComponent,
  ],
  selector: 'my-workspace-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'admin';
}
