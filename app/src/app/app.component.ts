import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
  <style>
    :host {
    --content-padding: 10px;
  }
  header {
    display: block;
    height: 100px;
    padding: var(--content-padding);
    box-shadow: 0px 5px 25px var(--shadow-color);
  }
  .content {
    padding: var(--content-padding);
  }
  </style>
  <main>
    <header class="brand-name">
    <img class="brand-logo" src="assets/logo.svg"
    alt="Logo" aria-hidden="true">
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
