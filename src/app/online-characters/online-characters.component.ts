import { Component, OnInit } from '@angular/core';
import { GuildService } from '../guild.service';

@Component({
  selector: 'app-online-characters',
  templateUrl: './online-characters.component.html',
  styleUrls: ['./online-characters.component.css']
})
export class OnlineCharactersComponent implements OnInit {
  onlineCharacters: any[] = [];
  originalCharacters: any[] = [];

  constructor(private guildService: GuildService) {}

  ngOnInit(): void {
    this.fetchOnlineCharacters();
  }

  fetchOnlineCharacters(): void {
    this.guildService.getGuildCharacters().subscribe(data => {
      this.onlineCharacters = data;
      this.originalCharacters = [...data]; // Armazena a ordem original
    }, error => {
      console.error('Error fetching data:', error);
    });
  }

  sortByName(): void {
    this.onlineCharacters.sort((a, b) => a.name.localeCompare(b.name));
  }

  sortByLevel(): void {
    this.onlineCharacters.sort((a, b) => b.level - a.level);
  }

  sortByVocation(): void {
    this.onlineCharacters.sort((a, b) => a.vocation.localeCompare(b.vocation));
  }

  resetOrder(): void {
    this.onlineCharacters = [...this.originalCharacters];
  }

  copyToClipboard(characterName: string): void {
    const formattedName = `exiva "${characterName}"`;
    const textarea = document.createElement('textarea');
    textarea.value = formattedName;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert(`${formattedName} copied to clipboard!`);
  }

  getVocationIcon(vocation: string): string {
    switch (vocation.toLowerCase()) {
      case 'knight':
        return '⚔️'; // Espada
      case 'elite knight':
        return '⚔️'; // Espada
      case 'sorcerer':
        return '💀'; // Caveira
      case 'master sorcerer':
        return '💀'; // Caveira
      case 'paladin':
        return '🏹'; // Crossbow
      case 'royal paladin':
        return '🏹'; // Crossbow
      case 'druid':
        return '🪄'; // Rod
      case 'elder druid':
        return '🪄'; // Rod
      default:
        return '';
    }
  }
}
