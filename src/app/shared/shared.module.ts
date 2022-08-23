import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { NavbarComponent } from './components/navbar/navbar.component'
import { PageComponent } from './components/page/page.component'
import { PaginatorComponent } from './components/paginator/paginator.component'
import { SearchboxComponent } from './components/searchbox/searchbox.component'
import { SpinnerComponent } from './components/spinner/spinner.component'

@NgModule({
  declarations: [
    NavbarComponent,
    PageComponent,
    PaginatorComponent,
    SearchboxComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FontAwesomeModule,
  ],
  exports: [
    PageComponent,
    PaginatorComponent,
    SearchboxComponent,
    SpinnerComponent,
  ],
})
export class SharedModule { }
