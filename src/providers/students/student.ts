import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the StudentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StudentProvider {

  public urlWebservice = "http://www.brazilwebdevelopers.com"

  constructor(public http: HttpClient) {
    console.log('Hello StudentProvider Provider');
  }

  public findAll(): Observable<any>{
    return this.http.get(this.urlWebservice);
  }

}
