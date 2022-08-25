import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { UserService } from 'src/app/modules/user/services/user/user.service'
import { Film } from '../../models/Film'
import { FilmsService } from '../../services/films.service'

@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.component.html',
  styleUrls: ['./film-page.component.scss'],
})
export class FilmPageComponent implements OnInit {
  editIcon = faEdit

  @Input()
  public film: Film | null = null

  doneLoading: boolean = false
  adminMode: boolean = false

  constructor (
    private readonly filmService: FilmsService,
    private readonly userService: UserService,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit (): void {
    this.userService.user$.subscribe(() => {
      this.adminMode = this.userService.isAdmin()
    })

    const id = this.route.snapshot.params['id']
    this.filmService
      .findFilm(id)
      .subscribe(film => {
        this.film = film
        this.doneLoading = true
      })
  }
}
