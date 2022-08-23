import { Film } from '../../films/models/Film'

export type PartialFilm = Pick<Film, 'filmId' | 'title' | 'description' | 'releaseYear' | '_links'>
