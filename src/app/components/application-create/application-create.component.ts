import {Component, OnInit} from '@angular/core';
import {ApplicationService} from 'src/app/services/application.service';
import {Application} from "../../models/application.model";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-application-create',
  templateUrl: './application-create.component.html',
  styleUrls: ['./application-create.component.css']
})
export class ApplicationCreateComponent implements OnInit {
  application: Application = {
    name: '',
    description: '',
    contact: '',
    admins: []
  };
  submitted = false;

  constructor(private datePipe: DatePipe, private applicationService: ApplicationService) {
  }

  ngOnInit(): void {
  }

  createApplication(): void {

    let date = new Date();
    const data = {
      name: this.application.name,
      description: this.application.description,
      contact: this.application.contact,
      admins: this.application.admins,
      validFrom: this.datePipe.transform(date, "yyyy-MM-dd HH:MM:SS")
    };

    this.applicationService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newApplication(): void {
    this.submitted = false;
    this.application = {
      name: '',
      description: '',
      contact: '',
      admins: []
    };
  }

}
