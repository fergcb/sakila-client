import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Page } from 'src/app/shared/models/Page'
import { DataService } from 'src/app/shared/services/data/data.service'
import { Film } from '../../models/Film'
import { FilmCollection } from '../../models/FilmCollection'
import { FilmsService } from '../../services/films.service'

@Component({
  selector: 'app-films-page',
  templateUrl: './films-page.component.html',
  styleUrls: ['./films-page.component.scss'],
})
export class FilmsPageComponent implements OnInit {
  public doneLoading: boolean = false
  public films: Film[] = []
  public page!: Page
  public prevUrl!: string
  public nextUrl!: string
  public search!: string

  constructor (
    private readonly filmsService: FilmsService,
    private readonly dataService: DataService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {}

  ngOnInit (): void {
    this.route.queryParams.subscribe(query => {
      const params: {[key: string]: any} = {}

      const searchQuery = query['search']
      if (searchQuery !== undefined && searchQuery === this.search) return
      if (searchQuery !== undefined) {
        params['title'] = searchQuery
        this.search = searchQuery
      }

      const page = query['page'] as number - 1
      if (page === this.page?.number) return
      if (this.page !== undefined) {
        params['page'] = page
      }

      this.filmsService
        .searchFilms(params)
        .subscribe(filmCollection => this.updateFilms(filmCollection))
    })
  }

  updateFilms (filmCollection: FilmCollection): void {
    this.films = filmCollection._embedded.films
    this.page = filmCollection.page
    this.prevUrl = filmCollection._links.previous?.href
    this.nextUrl = filmCollection._links.next?.href

    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        page: this.page.number + 1,
        search: this.search,
      },
      queryParamsHandling: 'merge',
    })

    this.doneLoading = true
  }

  onSearch (searchQuery: any): void {
    this.search = searchQuery
    this.doneLoading = false
    this.filmsService
      .searchFilms({ title: searchQuery })
      .subscribe(filmCollection => this.updateFilms(filmCollection))
  }

  fetchPrevious (): void {
    this.doneLoading = false
    this.dataService
      .get<FilmCollection>(this.prevUrl)
      .subscribe(filmCollection => this.updateFilms(filmCollection))
  }

  fetchNext (): void {
    this.doneLoading = false
    this.dataService
      .get<FilmCollection>(this.nextUrl)
      .subscribe(filmCollection => this.updateFilms(filmCollection))
  }
}
