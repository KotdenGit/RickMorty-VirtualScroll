import { Component, Input } from '@angular/core';
import { Individual } from '../individual';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-individual',
  imports: [CommonModule],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="individual.image" alt="Character photo of {{individual.name}}" />
      <h2 class="listing-heading">{{ individual.name }}</h2>
      <p class="listing-description">{{ individual.gender }}, {{ individual.species}}</p>
      <a class="button">Learn More</a>
    </section>
  `,
  styleUrl: './individual.component.scss'
})
export class IndividualComponent {
  @Input() individual!: Individual;
}
