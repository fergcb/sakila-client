import { Routes } from '@angular/router'
import { ActorPageComponent } from './pages/actor-page/actor-page.component'
import { ActorsPageComponent } from './pages/actors-page/actors-page.component'
import { CreateActorPageComponent } from './pages/create-actor-page/create-actor-page.component'
import { EditActorPageComponent } from './pages/edit-actor-page/edit-actor-page.component'

export const actorsRoutes: Routes = [
  {
    path: 'actors',
    children: [
      { path: '', component: ActorsPageComponent },
      { path: 'create', component: CreateActorPageComponent },
      { path: ':id/edit', component: EditActorPageComponent },
      { path: ':id', component: ActorPageComponent },
      { path: '**', redirectTo: '' },
    ],
  },
]
