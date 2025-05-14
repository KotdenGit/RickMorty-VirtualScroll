import { Injectable } from '@angular/core';
import { Individual } from './individual';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private url = 'https://rickandmortyapi.com/api/character';
  private characters: Individual[] = [];
  private searchResults: Individual[] = [];

  async getAllCharacters(): Promise<Individual[]> {
    try {
      const response = await fetch(this.url);
      const data = await response.json();
      this.characters = data.results ?? [];
      return this.characters;
    } catch (error) {
      console.error('Ошибка при получении персонажей:', error);
      return [];
    }
  }

  async searchCharacters(name: string): Promise<Individual[]> {
    try {
      const response = await fetch(`${this.url}/?name=${encodeURIComponent(name)}`);
      const data = await response.json();
      this.searchResults = data.results ?? [];
      return this.searchResults;
    } catch (error) {
      console.error('Ошибка при поиске персонажей:', error);
      return [];
    }
  }

  getCharacters(): Individual[] {
    return this.characters;
  }

  getSearchResults(): Individual[] {
    return this.searchResults;
  }
}
