import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, throwError } from 'rxjs'
import { UserService } from 'src/app/modules/user/services/user/user.service'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly baseURL: string = environment.API_URL

  constructor (
    private readonly http: HttpClient,
    private readonly userService: UserService,
  ) { }

  get <T>(resource: string, params: {[key: string]: any} = {}): Observable<T> {
    const url = this.resolveUrl(resource)
    return this.http.get<T>(url, { params })
  }

  update <T>(resource: string, body: Partial<T>): Observable<null> {
    const url = this.resolveUrl(resource)
    if (this.userService.isLoggedIn()) {
      const accessToken = this.userService.getAccessToken() as string
      return this.http.patch<null>(url, body, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
    }
    return throwError(() => new HttpErrorResponse({ status: 403 }))
  }

  private resolveUrl (resource: string): string {
    return resource.startsWith(this.baseURL) ? resource : this.baseURL + resource
  }
}
