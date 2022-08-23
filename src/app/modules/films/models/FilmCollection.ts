import { Link } from 'src/app/shared/models/Link'
import { Page } from 'src/app/shared/models/Page'
import { Film } from './Film'

export interface FilmCollection {
  page: Page
  _embedded: {
    films: Film[]
  }
  _links: {
    previous: Link
    next: Link
  }
}
