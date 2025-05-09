import { Injectable } from '@angular/core';
import { Individual } from './individual';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  url = 'http://localhost:3000/characters';

  constructor() { }

  async getAllCharacters(): Promise<Individual[]> {
    const data = await fetch(this.url);
    return await data.json() ?? []; 
  }
}
