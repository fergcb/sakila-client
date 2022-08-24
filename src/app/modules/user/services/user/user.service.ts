import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { SessionDetails } from '../../models/SessionDetails'
import { User } from '../../models/User'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly baseURL: string = environment.AUTH_URL

  private loggedIn: boolean = false
  private session: SessionDetails | null = null
  private user: User | null = null

  constructor (
    private readonly http: HttpClient,
  ) {}

  isLoggedIn (): boolean {
    return this.loggedIn
  }

  getUser (): User | null {
    return this.user
  }

  saveSession (session: SessionDetails): void {
    localStorage.setItem('session', JSON.stringify(session))
  }

  loadSession (): SessionDetails | null {
    const json = localStorage.getItem('session')
    if (json === null) return null
    return JSON.parse(json)
  }

  clearSession (): void {
    localStorage.removeItem('session')
  }

  getUserInfo (session: SessionDetails): Observable<User> {
    return this.http.get<User>(session._links.userinfo.href)
  }

  init (): Observable<User | null> {
    return new Observable(observer => {
      this.session = this.loadSession()
      if (this.session === null) {
        this.loggedIn = false
        this.user = null
        observer.next(null)
        observer.complete()
        return
      }

      this.getUserInfo(this.session)
        .subscribe(user => {
          this.loggedIn = true
          this.user = user
          observer.next(user)
          observer.complete()
        })
    })
  }

  login (username: String, password: String): Observable<User> {
    return new Observable(observer => {
      this.http.post<SessionDetails>(this.baseURL + '/sessions/login', {
        username,
        password,
      }).subscribe(session => {
        this.getUserInfo(session)
          .subscribe(user => {
            this.saveSession(session)
            this.session = session
            this.loggedIn = true
            this.user = user
            observer.next(user)
            observer.complete()
          })
      })
    })
  }

  logout (): void {
    this.clearSession()
    this.user = null
    this.session = null
    this.loggedIn = false
  }
}
