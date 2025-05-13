import { Injectable, signal } from '@angular/core';
import { Individual } from './individual';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private url = 'https://rickandmortyapi.com/api/character';
  private characters = signal<Individual[]>([]);
  private searchResults = signal<Individual[]>([]);

  async getAllCharacters(): Promise<void> {
    try {
      const response = await fetch(this.url);
      const data = await response.json();
      this.characters.set(data.results ?? []);
    } catch (error) {
      console.error('Ошибка при получении персонажей:', error);
    }
  }

  async searchCharacters(name: string): Promise<void> {
    try {
      const response = await fetch(`${this.url}/?name=${encodeURIComponent(name)}`);
      const data = await response.json();
      this.searchResults.set(data.results ?? []);
      console.log(this.searchResults());
    } catch (error) {
      console.error('Ошибка при поиске персонажей:', error);
    }
  }

  getCharacters() {
    return this.characters.asReadonly();
  }

  getSearchResults() {
    return this.searchResults.asReadonly();
  }
}
