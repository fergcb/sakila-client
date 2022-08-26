import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared/shared.module'
import { DemoPageComponent } from './pages/demo-page/demo-page.component'
import { HomePageComponent } from './pages/home-page/home-page.component'

@NgModule({
  declarations: [
    HomePageComponent,
    DemoPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
})
export class HomeModule {}
