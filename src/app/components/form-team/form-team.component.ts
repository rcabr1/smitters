import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { FormTeamService } from '../../services/form-team.service';
import { RolePlayers } from '../../shared/models/RolePlayers';

@Component({
  selector: 'app-form-team',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
  ],
  templateUrl: './form-team.component.html',
  styleUrl: './form-team.component.scss'
})
export class FormTeamComponent implements OnInit {
  teams: number;
  rolePlayersArray: RolePlayers[] = [];
  shuffledTeams: string[] = [];

  constructor(private formTeamService: FormTeamService) {
    this.teams = this.formTeamService.getTeams();
    this.rolePlayersArray = this.formTeamService.getRolePlayersArray();
  }

  ngOnInit(): void {}

  getTeamRowsGridStyle(): string {
    return `repeat(${this.teams}, 1fr)`;
  }

  updateTeams(): void {
    this.formTeamService.setTeams(this.teams);
  }

  updateRolePlayersArray(): void {
    this.formTeamService.setRolePlayersArray(this.rolePlayersArray);
  }

  shuffleTeams(): void {
    this.shuffledTeams = this.formTeamService.shuffleTeams();
  }
}
