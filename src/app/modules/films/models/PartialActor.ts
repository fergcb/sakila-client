import { Actor } from '../../actors/models/Actor'

export type PartialActor = Pick<Actor, 'fullName' | '_links'>
