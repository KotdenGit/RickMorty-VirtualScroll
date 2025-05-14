import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IndividualComponent } from '../individual/individual.component';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Individual } from '../individual';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character',
  imports: [CommonModule, FormsModule, IndividualComponent],
  template: `
    <section>
      <form>
        <input
          type="text"
          placeholder="Filter by name"
          [(ngModel)]="searchQuery"
          name="filter"
          [ngModelOptions]="{ standalone: true }"
        />
        <button class="primary" type="button" (click)="search()">Search</button>
      </form>
    </section>
    <section class="results">
      <app-individual *ngFor="let individual of filteredNameList" [individual]="individual"></app-individual>
    </section>
  `,
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  searchQuery = '';
  characters: Individual[] = [];
  searchResults: Individual[] = [];
  filteredNameList: Individual[] = [];

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.loadAllCharacters();
  }

  async loadAllCharacters(): Promise<void> {
    this.characters = await this.characterService.getAllCharacters();
    this.updateFilteredList();
  }

  async search(): Promise<void> {
    if (this.searchQuery.trim()) {
      this.searchResults = await this.characterService.searchCharacters(this.searchQuery);
    } else {
      this.searchResults = [];
      await this.loadAllCharacters();
    }
    this.updateFilteredList();
  }

  updateFilteredList(): void {
    const searchQueryLower = this.searchQuery.toLowerCase();
    const sourceList = this.searchResults.length > 0 ? this.searchResults : this.characters;
    this.filteredNameList = sourceList.filter((individual) =>
      individual.name.toLowerCase().includes(searchQueryLower)
    );
  }
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    IndividualComponent,
    CharacterComponent
  ],
})
export class AppModule { }

