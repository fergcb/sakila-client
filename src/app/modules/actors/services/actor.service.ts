import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { DataService } from 'src/app/shared/services/data/data.service'
import { Actor } from '../models/Actor'
import { ActorCollection } from '../models/ActorCollection'

@Injectable({
  providedIn: 'root',
})
export class ActorService {
  constructor (
    private readonly dataService: DataService,
  ) {}

  searchActors (params?: { page?: number, name?: string}): Observable<ActorCollection> {
    return this.dataService.get<ActorCollection>('/actors', params)
  }

  findActor (id: number): Observable<Actor> {
    return this.dataService.get<Actor>(`/actors/${id}`)
  }
}
