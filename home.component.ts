import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { email } from 'src/app/Shared/email.model';
import { EmailSendService } from '../Shared/email-send.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  readonly emailControllerUrl: string = "https://localhost:44384/api/Email";


  constructor(public service: EmailSendService) {

}


  onSubmit(form) {
    console.log(form.value);

    this.service.postPaymentDetails().subscribe(result => console.log(result));

  }

}
