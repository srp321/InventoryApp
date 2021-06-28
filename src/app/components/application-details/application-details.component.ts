import {Component, OnInit} from '@angular/core';
import {ApplicationService} from "../../services/application.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Application} from "../../models/application.model";

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.css']
})
export class ApplicationDetailsComponent implements OnInit {
  currentApplication: Application = {
    name: '',
    description: '',
    contact: '',
    admins: []
  };
  message = '';

  constructor(
    private applicationService: ApplicationService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.message = '';
    this.getApplication(this.route.snapshot.params.id);
  }

  getApplication(id: String): void {
    this.applicationService.read(id)
      .subscribe(
        application => {
          this.currentApplication = application;
          console.log(application);
        },
        error => {
          console.log(error);
        });
  }

  updateApplication(): void {
    this.message = '';
    const data = {
      name: this.currentApplication.name,
      description: this.currentApplication.description,
    };

    this.applicationService.update(this.currentApplication.id, data)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'Application updated successfully!';
        },
        error => {
          console.log(error);
        });
  }
}
