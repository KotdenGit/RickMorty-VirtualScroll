import { Injectable } from '@angular/core';
import { Individual } from './individual';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  url = 'https://rickandmortyapi.com/api/character';

  async getAllCharacters(): Promise<Individual[]> {
    const response = await fetch(this.url);
    const data = await response.json();
    return data.results ?? [];
  }
}
