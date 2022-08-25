import { HttpErrorResponse } from '@angular/common/http'
import { Component, Input, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { catchError, of } from 'rxjs'
import { Actor } from '../../models/Actor'
import { ActorService } from '../../services/actor.service'

@Component({
  selector: 'app-edit-actor-page',
  templateUrl: './edit-actor-page.component.html',
  styleUrls: ['./edit-actor-page.component.scss'],
})
export class EditActorPageComponent implements OnInit {
  @Input() actor!: Actor
  doneLoading: boolean = false
  error: string | null = null
  success: string | null = null

  form = new FormGroup<{
    firstName: FormControl<string | undefined>
    lastName: FormControl<string | undefined>
  }>({
    firstName: new FormControl(),
    lastName: new FormControl(),
  })

  constructor (
    private readonly actorService: ActorService,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit (): void {
    const id = this.route.snapshot.params['id']
    this.actorService
      .findActor(id)
      .subscribe(actor => {
        this.actor = actor
        const { firstName, lastName } = actor
        this.form.setValue({ firstName, lastName })
        this.doneLoading = true
      })
  }

  onSubmit (evt: Event): void {
    evt.preventDefault()

    this.error = null
    this.success = null

    this.actorService
      .updateActor(this.actor.actorId, this.form.value)
      .pipe(catchError((err: HttpErrorResponse) => {
        if (err.status === 403) {
          this.error = 'You do not have permission to edit this actor.'
        } else if (err.status === 401) {
          this.error = 'We couldn\'t authorize your request. Make sure you\'re logged in as an administrator and try again.'
        }
        return of(err)
      }))
      .subscribe((err) => {
        if (err !== null) return
        this.success = 'Your changes have been saved.'
      })
  }
}
