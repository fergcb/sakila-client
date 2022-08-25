import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { DataService } from 'src/app/shared/services/data/data.service'
import { Actor } from '../models/Actor'
import { ActorCollection } from '../models/ActorCollection'
import { NewActor } from '../models/NewActor'

@Injectable({
  providedIn: 'root',
})
export class ActorService {
  constructor (
    private readonly dataService: DataService,
  ) {}

  createActor (data: NewActor): Observable<Actor> {
    return this.dataService.create<Actor>('/actors', data)
  }

  searchActors (params?: { page?: number, name?: string}): Observable<ActorCollection> {
    return this.dataService.get<ActorCollection>('/actors', params)
  }

  findActor (id: number): Observable<Actor> {
    return this.dataService.get<Actor>(`/actors/${id}`)
  }

  updateActor (id: number, data: Partial<Actor>): Observable<null> {
    return this.dataService.update<Actor>(`/actors/${id}`, data)
  }

  deleteActor (id: number): Observable<null> {
    return this.dataService.delete(`/actors/${id}`)
  }
}
