import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  public getHello(): Observable<any> {
    return this.http.get(environment.apiHost + '/hello');
  }

  getDateTime() {
    return this.http.get<string>(environment.apiHost + '/date-time');
  }

  sendMessage(message: string) {
    return this.http.post<string>(environment.apiHost + '/message', {
      message
    });
  }
}
