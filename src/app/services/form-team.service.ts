import { Injectable } from '@angular/core';
import { RolePlayers } from '../shared/models/RolePlayers';

@Injectable({
  providedIn: 'root'
})
export class FormTeamService {
  roles: string[] = ['Top Laner', 'Suporte', 'Jungler', 'ADC', 'Defender'];

  private teams: number = 3;

  private rolePlayersArray: RolePlayers[] = this.roles.map(role => {
    return { role, players: Array(4).fill('') };
  });

  getTeams(): number {
    return this.teams;
  }

  setTeams(teams: number): void {
    this.teams = teams;
  }

  getRolePlayersArray(): RolePlayers[] {
    return this.rolePlayersArray;
  }

  setRolePlayersArray(rolePlayers: RolePlayers[]): void {
    this.rolePlayersArray = rolePlayers;
  }

  shuffleTeams(): string[] {
    let randomRolePlayers =  this.rolePlayersArray.map(rolePlayers => {
      return rolePlayers.players.slice(0, this.teams).sort(() => { return Math.random() - 0.5; });
    })

    let shuffledTeams = [];

    for (let index = 0; index < this.teams; index++) {
      let shuffledTeam = randomRolePlayers.map(randomRolePlayer => {
        return randomRolePlayer[index];
      }).join(', ');

      shuffledTeams.push(shuffledTeam);
    }

    return shuffledTeams;
  }

  constructor() { }
}
