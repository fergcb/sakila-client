import { Component, EventEmitter, Output } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { catchError, of } from 'rxjs'
import { UserService } from '../../services/user/user.service'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @Output() loginError = new EventEmitter<string>()

  form = new FormGroup<{
    username: FormControl<string | null>
    password: FormControl<string | null>
  }>({
    username: new FormControl(),
    password: new FormControl(),
  })

  constructor (
    private readonly userService: UserService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {}

  onSubmit (evt: Event): void {
    const username = this.form.value.username
    const password = this.form.value.password

    if (
      typeof username !== 'string' ||
      typeof password !== 'string'
    ) return

    this.userService
      .login(username, password)
      .pipe(catchError(_ => {
        this.loginError.emit('Login failed: make sure your username and password are correct.')
        return of(null)
      }))
      .subscribe(user => {
        if (user === null) return
        const redirect = this.route.snapshot.queryParams['redirect'] as string
        if (typeof redirect === 'string' && redirect !== '') {
          const path = decodeURI(redirect)
          void this.router.navigateByUrl(path)
        } else {
          void this.router.navigate(['/'])
        }
      })
  }
}
