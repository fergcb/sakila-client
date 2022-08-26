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

  create <T>(resource: string, body: Partial<T>): Observable<T> {
    const url = this.resolveUrl(resource)
    if (this.userService.isLoggedIn()) {
      return this.http.post<T>(url, body, {
        headers: this.getAuthHeaders(),
      })
    }
    return throwError(() => new HttpErrorResponse({ status: 403 }))
  }

  get <T>(resource: string, params: {[key: string]: any} = {}): Observable<T> {
    const url = this.resolveUrl(resource)
    return this.http.get<T>(url, { params })
  }

  update <T>(resource: string, body: Partial<T>): Observable<null> {
    const url = this.resolveUrl(resource)
    if (this.userService.isLoggedIn()) {
      return this.http.patch<null>(url, body, {
        headers: this.getAuthHeaders(),
      })
    }
    return throwError(() => new HttpErrorResponse({ status: 403 }))
  }

  delete (resource: string): Observable<null> {
    const url = this.resolveUrl(resource)
    if (this.userService.isLoggedIn()) {
      return this.http.delete<null>(url, {
        headers: this.getAuthHeaders(),
      })
    }
    return throwError(() => new HttpErrorResponse({ status: 403 }))
  }

  private getAuthHeaders (): { [header: string]: string } {
    const accessToken = this.userService.getAccessToken() as string
    return {
      Authorization: `Bearer ${accessToken}`,
    }
  }

  private resolveUrl (resource: string): string {
    if (resource.startsWith('https')) {
      return resource
    }

    if (resource.startsWith('http')) {
      return resource.replace(/^http/, 'https')
    }

    return this.baseURL + resource
  }
}
