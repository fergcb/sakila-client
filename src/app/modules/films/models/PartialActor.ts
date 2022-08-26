import { Actor } from '../../actors/models/Actor'

export type PartialActor = Pick<Actor, 'actorId' | 'fullName' | '_links'>
