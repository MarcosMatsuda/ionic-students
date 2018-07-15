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

  public findAll(): Observable<any> {
    return this.http.get(this.urlWebservice);
  }

  public create(student): Observable<any> {
    return this.http.post(this.urlWebservice, student);
  }

  public update(id, student): Observable<any> {
    return this.http.put(`${this.urlWebservice}/${id}`, student);
  }

}
