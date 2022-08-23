import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FilmsPageComponent } from './pages/films-page/films-page.component'
import { FilmPageComponent } from './pages/film-page/film-page.component'
import { FilmCardComponent } from './components/film-card/film-card.component'
import { FilmListComponent } from './components/film-list/film-list.component'
import { SharedModule } from 'src/app/shared/shared.module'

@NgModule({
  declarations: [
    FilmPageComponent,
    FilmsPageComponent,
    FilmCardComponent,
    FilmListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
})
export class FilmsModule {}
