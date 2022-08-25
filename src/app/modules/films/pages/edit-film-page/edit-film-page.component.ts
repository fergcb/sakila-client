import { HttpErrorResponse } from '@angular/common/http'
import { Component, Input, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { catchError, of, OperatorFunction } from 'rxjs'
import { Film } from '../../models/Film'
import { FilmsService } from '../../services/films.service'

@Component({
  selector: 'app-edit-film-page',
  templateUrl: './edit-film-page.component.html',
  styleUrls: ['./edit-film-page.component.scss'],
})
export class EditFilmPageComponent implements OnInit {
  @Input() film!: Film
  doneLoading: boolean = false
  error: string | null = null
  success: string | null = null

  form = new FormGroup<{
    title: FormControl<string | undefined>
    releaseYear: FormControl<number | undefined>
    description: FormControl<string | undefined>
  }>({
    title: new FormControl(),
    releaseYear: new FormControl(),
    description: new FormControl(),
  })

  constructor (
    private readonly filmService: FilmsService,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit (): void {
    const id = this.route.snapshot.params['id']
    this.filmService
      .findFilm(id)
      .subscribe(film => {
        this.film = film
        const { title, releaseYear, description } = film
        this.form.setValue({ title, releaseYear, description })
        this.doneLoading = true
      })
  }

  private handleError (action: string): OperatorFunction<unknown, unknown> {
    return catchError((err: HttpErrorResponse) => {
      if (err.status === 403) {
        this.error = `You do not have permission to ${action} this film.`
      } else if (err.status === 401) {
        this.error = 'We couldn\'t authorize your request. Make sure you\'re logged in as an administrator and try again.'
      }
      return of(err)
    })
  }

  onSubmit (evt: Event): void {
    evt.preventDefault()

    this.error = null
    this.success = null

    this.filmService
      .updateFilm(this.film.filmId, this.form.value)
      .pipe(this.handleError('update'))
      .subscribe(err => {
        if (err !== null) return
        this.success = 'Your changes have been saved.'
      })
  }

  onDelete (evt: Event): void {
    evt.preventDefault()

    const confirmed = window.confirm('Are you sure you want to delete this film?\n\nThis action cannot be undone.')
    if (!confirmed) return

    this.error = null
    this.success = null

    this.filmService
      .deleteFilm(this.film.filmId)
      .pipe(this.handleError('delete'))
      .subscribe(err => {
        if (err !== null) return
        this.success = 'This film has been deleted.'
      })
  }
}
