import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndividualComponent } from '../individual/individual.component';

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
      <app-individual></app-individual>
    </section>
  `,
  styleUrl: './character.component.scss'
})
export class CharacterComponent {

}
