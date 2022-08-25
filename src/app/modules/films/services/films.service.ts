import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { DataService } from 'src/app/shared/services/data/data.service'
import { Film } from '../models/Film'
import { FilmCollection } from '../models/FilmCollection'

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  constructor (
    private readonly dataService: DataService,
  ) {}

  searchFilms (params?: { page?: number, title?: string}): Observable<FilmCollection> {
    return this.dataService.get<FilmCollection>('/films', params)
  }

  findFilm (id: number): Observable<Film> {
    return this.dataService.get<Film>(`/films/${id}`)
  }

  updateFilm (id: number, data: Partial<Film>): Observable<null> {
    return this.dataService.update<Film>(`/films/${id}`, data)
  }

  deleteFilm (id: number): Observable<null> {
    return this.dataService.delete(`/films/${id}`)
  }
}
