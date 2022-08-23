import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ActorsPageComponent } from './pages/actors-page/actors-page.component'
import { ActorPageComponent } from './pages/actor-page/actor-page.component'
import { ActorCardComponent } from './components/actor-card/actor-card.component'
import { ActorListComponent } from './components/actor-list/actor-list.component'
import { SharedModule } from 'src/app/shared/shared.module'

@NgModule({
  declarations: [
    ActorsPageComponent,
    ActorPageComponent,
    ActorCardComponent,
    ActorListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
})
export class ActorsModule {}
