import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { actorsRoutes } from './modules/actors/actors.route'
import { filmsRoutes } from './modules/films/films.route'
import { userRoutes } from './modules/user/user.route'

const routes: Routes = [
  ...filmsRoutes,
  ...actorsRoutes,
  ...userRoutes,
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
    onSameUrlNavigation: 'reload',
  })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
