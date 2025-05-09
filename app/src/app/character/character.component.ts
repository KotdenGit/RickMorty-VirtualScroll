import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndividualComponent } from '../individual/individual.component';
import { Individual } from '../individual';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character',
  imports: [CommonModule, IndividualComponent],
  template: `
    <section>
      <form>  
        <input type="text" placeholder="Filter by name" #filter>
        <button class="primary" type="button" >Search</button>
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
  characterService: CharacterService = inject(CharacterService);

  constructor() {
    this.characterService.getAllCharacters().then((individualList: Individual[]) => {
      this.individualList = individualList;
      this.filteredNameList = this.individualList;
    });
  }

}
