import { Routes } from '@angular/router'
import { CreateFilmPageComponent } from './pages/create-film-page/create-film-page.component'
import { EditFilmPageComponent } from './pages/edit-film-page/edit-film-page.component'
import { FilmPageComponent } from './pages/film-page/film-page.component'
import { FilmsPageComponent } from './pages/films-page/films-page.component'

export const filmsRoutes: Routes = [
  {
    path: 'films',
    children: [
      { path: '', component: FilmsPageComponent },
      { path: 'create', component: CreateFilmPageComponent },
      { path: ':id/edit', component: EditFilmPageComponent },
      { path: ':id', component: FilmPageComponent },
      { path: '**', redirectTo: '' },
    ],
  },
]
