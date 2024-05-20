import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormTeamComponent } from './components/form-team/form-team.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormTeamComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
