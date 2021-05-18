import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { email } from './email.model';

@Injectable({
  providedIn: 'root'
})
export class EmailSendService {

  constructor(public http: HttpClient ) { }
  formData: email = new email();
  readonly baseUrl = "https://localhost:44384/api/Email";

  postPaymentDetails() {
    return this.http.post(this.baseUrl, this.formData,
      {
        header: new HttpHeaders({
'Content-Type' : 'application/json'
        })
      }
    )
  }
}
