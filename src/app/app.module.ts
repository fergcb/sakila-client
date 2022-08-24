import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ActorsModule } from './modules/actors/actors.module'
import { FilmsModule } from './modules/films/films.module'
import { UserModule } from './modules/user/user.module'
import { SharedModule } from './shared/shared.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    FilmsModule,
    ActorsModule,
    UserModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
