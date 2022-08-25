import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FilmsPageComponent } from './pages/films-page/films-page.component'
import { FilmPageComponent } from './pages/film-page/film-page.component'
import { FilmCardComponent } from './components/film-card/film-card.component'
import { FilmListComponent } from './components/film-list/film-list.component'
import { SharedModule } from 'src/app/shared/shared.module'
import { EditFilmPageComponent } from './pages/edit-film-page/edit-film-page.component'
import { ReactiveFormsModule } from '@angular/forms'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { RouterModule } from '@angular/router'
import { CreateFilmPageComponent } from './pages/create-film-page/create-film-page.component'

@NgModule({
  declarations: [
    CreateFilmPageComponent,
    EditFilmPageComponent,
    FilmPageComponent,
    FilmsPageComponent,
    FilmCardComponent,
    FilmListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule,
  ],
})
export class FilmsModule {}
