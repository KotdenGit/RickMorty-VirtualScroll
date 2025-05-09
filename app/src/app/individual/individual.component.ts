import { Component } from '@angular/core';

@Component({
  selector: 'app-individual',
  imports: [],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="" alt="Character photo of_" />
      <h2 class="listing-heading">name</h2>
      <p class="listing-description">gender, species</p>
      <a class="button">Learn More</a>
    </section>
  `,
  styleUrl: './individual.component.scss'
})
export class IndividualComponent {

}
