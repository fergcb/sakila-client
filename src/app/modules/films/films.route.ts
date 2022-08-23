import { Routes } from '@angular/router'
import { FilmPageComponent } from './pages/film-page/film-page.component'
import { FilmsPageComponent } from './pages/films-page/films-page.component'

export const filmsRoutes: Routes = [
  {
    path: 'films',
    children: [
      { path: '', component: FilmsPageComponent },
      { path: ':id', component: FilmPageComponent },
      { path: '**', redirectTo: '' },
    ],
  },
]
