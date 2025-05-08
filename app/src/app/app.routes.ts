import { Routes } from '@angular/router';
import { CharacterComponent } from './character/character.component';

export const routes: Routes = [
    {
        path: '',
        component: CharacterComponent,
        title: 'Character'
    }
];

export default routes;
