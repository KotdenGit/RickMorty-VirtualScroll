import { Injectable, signal } from '@angular/core';
import { Individual } from './individual';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private url = 'https://rickandmortyapi.com/api/character';
  private characters = signal<Individual[]>([]);

  async getAllCharacters(): Promise<void> {
    try {
      const response = await fetch(this.url);
      const data = await response.json();
      this.characters.set(data.results ?? []);
    } catch (error) {
      console.error('Ошибка при получении персонажей:', error);
    }
  }

  getCharacters() {
    return this.characters.asReadonly();
  }
}
