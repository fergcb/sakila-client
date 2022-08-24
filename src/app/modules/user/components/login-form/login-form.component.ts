import { Component } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { UserService } from '../../services/user/user.service'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
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
      .subscribe(user => {
        const redirect = this.route.snapshot.queryParams['redirect'] as string
        if (typeof redirect === 'string' && redirect !== '') {
          void this.router.navigate([redirect])
        } else {
          void this.router.navigate(['/films'])
        }
      })
  }
}
