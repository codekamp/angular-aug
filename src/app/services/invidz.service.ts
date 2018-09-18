// What you want to do?
// 1. URL
// 2. Request method - GET/POST/PUT/PATCH/DELETE
// 3. What data to send?
// 4  How to send data? Data can be send either in:
//         a. Query Parameters - key/value
//         b. Headers - key/value
//         c. Body (not available in GET/OPTIONS requests)
//              form data
//              url encoded,
//              json,
//              xml and so on.


// 5. parse response.


// 1. https://api.invidz.com/api/authenticate
// 2. GET
// 3. email and password.
// 4. Query Params. email key and password key.


// videos list - GET /videos - ?limit=20&page=3
// individual video - GET /videos/:id - query params
// add a new video - POST /videos - body
// Update a video - PATCH /videos/:id - body
// Replace a video - PUT /videos/:id - body
// Delete a video - DELETE /videos/:id

// Success status code 200 - 299

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';

@Injectable()
export class InvidzService {
  constructor(private http: HttpClient) {
  }

  login(email: string, pswd: string): Observable<Object> {
    return this.http.get('https://api.invidz.com/api/authenticate', {
      params: {email: email, password: pswd}
    });
  }

  getVideos(): Observable<Object> {
    return this.http.get('https://api.invidz.com/api/videos', {
      headers: {Authorization: 'bearer ' + localStorage.getItem('my_token')}
    });
  }
}

