import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ActorsPageComponent } from './pages/actors-page/actors-page.component'
import { ActorPageComponent } from './pages/actor-page/actor-page.component'
import { ActorCardComponent } from './components/actor-card/actor-card.component'
import { ActorListComponent } from './components/actor-list/actor-list.component'
import { SharedModule } from 'src/app/shared/shared.module'
import { EditActorPageComponent } from './pages/edit-actor-page/edit-actor-page.component'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { CreateActorPageComponent } from './pages/create-actor-page/create-actor-page.component'

@NgModule({
  declarations: [
    CreateActorPageComponent,
    EditActorPageComponent,
    ActorsPageComponent,
    ActorPageComponent,
    ActorCardComponent,
    ActorListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    FontAwesomeModule,
  ],
})
export class ActorsModule {}
