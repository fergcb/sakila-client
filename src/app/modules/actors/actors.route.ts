import { Routes } from '@angular/router'
import { ActorPageComponent } from './pages/actor-page/actor-page.component'
import { ActorsPageComponent } from './pages/actors-page/actors-page.component'
import { EditActorPageComponent } from './pages/edit-actor-page/edit-actor-page.component'

export const actorsRoutes: Routes = [
  {
    path: 'actors',
    children: [
      { path: '', component: ActorsPageComponent },
      { path: ':id/edit', component: EditActorPageComponent },
      { path: ':id', component: ActorPageComponent },
      { path: '**', redirectTo: '' },
    ],
  },
]
