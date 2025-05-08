import { Component } from '@angular/core';
import { CharacterComponent } from './character/character.component';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, CharacterComponent],
  template: `
  <style>
    :host {
      --content-padding: 10px;
    }
    header {
      position: relative;
      display: block;
      height: 100px;
      overflow: hidden;
      padding: var(--content-padding);
      box-shadow: 0px 5px 25px var(--shadow-color);
      background-color: var(--primary-color);
      background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
      z-index: -1;
    }
    header::before {
      content: "";
      position: absolute;
      top: -250%; 
      left: -40%; 
      width: 150%;
      height: 900%;
      background: url("/assets/logo.svg") repeat;
      background-size: 50px 50px;
      transform: rotate(-30deg);
    }
    .content {
      padding: var(--content-padding);
    }
  </style>
  <main>
    <header class="brand-name">
    </header>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
  `
})
export class AppComponent {
  title = 'my app';
}
