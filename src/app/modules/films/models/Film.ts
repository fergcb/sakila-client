import { Link } from 'src/app/shared/models/Link'
import { Category } from './Category'
import { Language } from './Language'
import { PartialActor } from './PartialActor'

export interface Film {
  filmId: number
  title: string
  description: string
  releaseYear: number
  language: Language
  originalLanguage: Language
  rating: string
  cast: PartialActor[]
  categories: Category[]
  _links: {
    self: Link
    reviews: Link
  }
}
