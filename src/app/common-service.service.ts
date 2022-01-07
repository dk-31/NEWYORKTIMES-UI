import { Injectable, EventEmitter } from '@angular/core';
import { Observable, observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CommonServiceService {
  accessKey = "wGL43W338wXGufSQMw6ddLdaZ5cRAAxk";
  url = 'https://api.nytimes.com/svc/topstories/v2'
  constructor(private http: HttpClient) {
  }

  getTopStories(): Observable<any> {
    return this.http.get('/v2/home.json?api-key=' + this.accessKey);
  }
  public getStories(options?: any) {
    return this.http.get(this.url + '/home.json?api-key=' + this.accessKey, options);
  }

  // private handleError<T>(operation: 'operation', result?: T) {
  //   return (error: any) Observable<T> => {
  //     return of(result as T);
  //   }
  // }
}
