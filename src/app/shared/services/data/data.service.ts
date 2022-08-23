import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly baseURL: string = environment.API_URL

  constructor (
    private readonly http: HttpClient,
  ) { }

  get <T>(resource: string, params: {[key: string]: any} = {}): Observable<T> {
    const url = resource.startsWith(this.baseURL) ? resource : this.baseURL + resource
    return this.http.get<T>(url, { params })
  }
}
