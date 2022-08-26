import { Routes } from '@angular/router'
import { DemoPageComponent } from './pages/demo-page/demo-page.component'
import { HomePageComponent } from './pages/home-page/home-page.component'

export const homeRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'demo', component: DemoPageComponent },
]
