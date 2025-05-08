import { Component } from '@angular/core';

@Component({
  selector: 'app-character',
  imports: [],
  template: `
    <section>
      <form>  
        <input type="text" placeholder="Filter by name" #filter>
        <button class="primary" type="button" >Search</button>
      </form>
    </section>
  `,
  styleUrl: './character.component.scss'
})
export class CharacterComponent {

}
