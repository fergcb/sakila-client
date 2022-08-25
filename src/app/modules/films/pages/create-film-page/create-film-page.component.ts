import { HttpErrorResponse } from '@angular/common/http'
import { Component } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { catchError, of } from 'rxjs'
import { Film } from '../../models/Film'
import { FilmsService } from '../../services/films.service'

@Component({
  selector: 'app-create-film-page',
  templateUrl: './create-film-page.component.html',
  styleUrls: ['./create-film-page.component.scss'],
})
export class CreateFilmPageComponent {
  error: string | null = null

  form = new FormGroup<{
    title: FormControl<string | null>
    releaseYear: FormControl<number | null>
    description: FormControl<string | null>
    languageIdStr: FormControl<number | null>
  }>({
    title: new FormControl(),
    releaseYear: new FormControl(),
    description: new FormControl(),
    languageIdStr: new FormControl(),
  })

  constructor (
    private readonly filmService: FilmsService,
    private readonly router: Router,
  ) {}

  private handleError (err: HttpErrorResponse): void {
    if (err.status === 403) {
      this.error = 'You do not have permission to create films.'
    } else if (err.status === 401) {
      this.error = 'We couldn\'t authorize your request. Make sure you\'re logged in as an administrator and try again.'
    } else {
      this.error = 'Failed to create the film.'
      console.error(err)
    }
  }

  onSubmit (): void {
    this.error = null

    const { title, releaseYear, description, languageIdStr } = this.form.value

    if (typeof title !== 'string' || title === '') {
      this.error = 'You must specify a film title.'
      return
    }

    if (typeof releaseYear !== 'number') {
      this.error = 'You must specify a release year.'
      return
    }

    if (typeof description !== 'string' || description === '') {
      this.error = 'You must specify a film description.'
      return
    }

    if (typeof languageIdStr !== 'string' || languageIdStr === '') {
      this.error = 'You must specify a language.'
      return
    }

    const languageId = parseInt(languageIdStr, 10)

    this.filmService
      .createFilm({ title, releaseYear, description, languageId })
      .pipe(catchError((err: HttpErrorResponse) => of(err)))
      .subscribe((res: HttpErrorResponse | Film) => {
        if (res instanceof HttpErrorResponse) {
          this.handleError(res)
          return
        }
        const filmId = res.filmId
        void this.router.navigateByUrl(`/films/${filmId}`)
      })
  }
}
