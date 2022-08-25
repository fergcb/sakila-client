import { HttpErrorResponse } from '@angular/common/http'
import { Component } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { catchError, of } from 'rxjs'
import { Actor } from '../../models/Actor'
import { ActorService } from '../../services/actor.service'

@Component({
  selector: 'app-create-actor-page',
  templateUrl: './create-actor-page.component.html',
  styleUrls: ['./create-actor-page.component.scss'],
})
export class CreateActorPageComponent {
  error: string | null = null

  form = new FormGroup<{
    firstName: FormControl<string | null>
    lastName: FormControl<string | null>
  }>({
    firstName: new FormControl(),
    lastName: new FormControl(),
  })

  constructor (
    private readonly actorService: ActorService,
    private readonly router: Router,
  ) {}

  private handleError (err: HttpErrorResponse): void {
    if (err.status === 403) {
      this.error = 'You do not have permission to create actors.'
    } else if (err.status === 401) {
      this.error = 'We couldn\'t authorize your request. Make sure you\'re logged in as an administrator and try again.'
    } else {
      this.error = 'Failed to create the actor.'
      console.error(err)
    }
  }

  onSubmit (): void {
    this.error = null

    const { firstName, lastName } = this.form.value

    if (typeof firstName !== 'string' || firstName === '') {
      this.error = 'You must specify the actor\'s first name.'
      return
    }

    if (typeof lastName !== 'string' || lastName === '') {
      this.error = 'You must specify the actor\'s last name.'
      return
    }

    this.actorService
      .createActor({ firstName, lastName })
      .pipe(catchError((err: HttpErrorResponse) => of(err)))
      .subscribe((res: HttpErrorResponse | Actor) => {
        if (res instanceof HttpErrorResponse) {
          this.handleError(res)
          return
        }
        const actorId = res.actorId
        void this.router.navigateByUrl(`/actors/${actorId}`)
      })
  }
}
