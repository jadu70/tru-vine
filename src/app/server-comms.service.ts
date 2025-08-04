import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, OnInit, signal } from '@angular/core';
import { from, Observable, switchMap, tap, throwError } from 'rxjs';
import {fetchAuthSession} from 'aws-amplify/auth'; 

@Injectable({
  providedIn: 'root'
})
export class ServerCommsService {
  private baseApiUrl = 'https://localhost:7200/api/AwsProxy'
  private httpClient = inject(HttpClient);
  
  constructor() {}

  // fetchClientData() {
  //   var webApiUrl = this.baseApiUrl + '/items';
  //   return this.httpClient.get(webApiUrl);
  // }

  fetchClientData(): Observable<any> {
  
    // 1. Get the current authenticated user's session (which contains the JWT)
    return from(fetchAuthSession()).pipe(
      // tap((session) => {
      //   console.log('Angular: fetchAuthSession result:', session);
      // }),
      switchMap((session) => {
        // In V6, the session object has a 'tokens' property
        if (!session.tokens || !session.tokens.accessToken) {
          console.error(
            'Angular: Aborting API call due to missing access token.'
          );
          return throwError(
            () => new Error('No valid access token available.')
          );
        }

        // Access the JWT token from the accessToken object
        const token = session.tokens.accessToken.toString();
        console.log('Token:' + token);

        // 2. Create HTTP headers and add the Authorization header
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, 
        });

        return this.httpClient.get(`${this.baseApiUrl}/items`, { headers });
      })
    );
  }
}
