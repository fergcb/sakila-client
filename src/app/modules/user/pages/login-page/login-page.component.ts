import { Component } from '@angular/core'

@Component({
  selector: 'app-login-page',
  templateUrl: 'login-page.component.html',
})
export class LoginPageComponent {
  error: string | null = null

  onError (error: string): void {
    this.error = error
  }
}
