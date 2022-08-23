import { Link } from 'src/app/shared/models/Link'
import { PartialFilm } from './PartialFilm'

export interface Actor {
  actorId: number
  firstName: string
  lastName: string
  fullName: string
  films: PartialFilm[]
  _links: {
    self: Link
  }
}
