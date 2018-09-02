import {HttpClient} from '@angular/common/http';
import {Inject, Injectable, InjectionToken} from '@angular/core';


export const API_URL = new InjectionToken('API_URL');
export const XYZ_SOMETHING = new InjectionToken('some unqiue string');

@Injectable()
export class LoginService {

  constructor(private http: HttpClient, @Inject(API_URL) private apiUrl: string, @Inject(XYZ_SOMETHING) sm: string) {
    console.log(this.http, this.apiUrl, sm);
  }

  public login(username: string, password: string) {
    console.log('LoginService', username, password);

    const obs = this.http.get('http://ip-api.com/json/106.199.56.44');

    console.log('Bill mil gaya');

    obs.subscribe(result => {
        console.log('Khana aa gaya');
        console.log(result);
      }, error => {
        console.log(error);
      }, () => {
        console.log('order complete');
      }
    );

    console.log('phone call to friend');
  }
}
