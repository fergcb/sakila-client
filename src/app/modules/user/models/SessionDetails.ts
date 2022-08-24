import { Link } from 'src/app/shared/models/Link'

export interface SessionDetails {
  accessToken: string
  refreshToken: string
  _links: {
    userinfo: Link
  }
}
