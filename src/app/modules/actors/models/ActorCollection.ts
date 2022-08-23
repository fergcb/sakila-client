import { Link } from 'src/app/shared/models/Link'
import { Page } from 'src/app/shared/models/Page'
import { Actor } from './Actor'

export interface ActorCollection {
  page: Page
  _embedded: {
    actors: Actor[]
  }
  _links: {
    previous: Link
    next: Link
  }
}
