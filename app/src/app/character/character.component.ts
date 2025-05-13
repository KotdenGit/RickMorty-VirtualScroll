import { Component, effect, inject, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IndividualComponent } from '../individual/individual.component';
import { Individual } from '../individual';
import { CharacterService } from '../character.service';

@Component({
  imports: [CommonModule, FormsModule, IndividualComponent],
  template: `
    <section>
      <form>  
        <input type="text" placeholder="Filter by name" [(ngModel)]="searchQuery" name="filter" [ngModelOptions]="{standalone: true}"/>
        <button class="primary" type="button" (click)="search()">Search</button>
      </form>
    </section>
    <section class="results">
      <app-individual *ngFor="let individual of filteredNameList" [individual]="individual"></app-individual>
    </section>
  `,
  styleUrl: './character.component.scss'
})
export class CharacterComponent {
  individualList: Individual[] = [];
  filteredNameList: Individual[] = [];
  searchQuery = '';
  characterService: CharacterService = inject(CharacterService);
  charactersSignal: Signal<Individual[]>;
  searchResultsSignal: Signal<Individual[]>;

  constructor() {
    this.charactersSignal = this.characterService.getCharacters();
    this.searchResultsSignal = this.characterService.getSearchResults(); 
    // Получаем сигнал

    // Эффект, обновляющий список персонажей (обычный или после поиска)
    effect(() => {
      this.filteredNameList = this.searchQuery 
        ? this.searchResultsSignal() 
        : this.charactersSignal();
    });
  }

  ngOnInit(): void {
    this.characterService.getAllCharacters();
  }

  search(): void {
    if (this.searchQuery.trim()) {
      this.characterService.searchCharacters(this.searchQuery);
      //console.log(this.searchResultsSignal());
    } else {
      this.characterService.getAllCharacters();
    }
  }
}
