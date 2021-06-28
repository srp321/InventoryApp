import {Component, OnInit} from '@angular/core';
import {ApplicationService} from 'src/app/services/application.service';
import {Application} from "../../models/application.model";

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {

  applications?: Application[];
  currentApplication: Application = {};
  currentIndex = -1;
  name = '';
  isWithEnv = false;

  constructor(private applicationService: ApplicationService) {
  }

  ngOnInit(): void {
    this.readApplications();
  }

  readApplications(): void {
    this.applicationService.readAll()
      .subscribe(
        applications => {
          this.applications = applications;
          console.log(applications);
        },
        error => {
          console.log(error);
        });
  }

  setCurrentApplication(application: Application, index: number): void {
    this.currentApplication = application;
    this.currentIndex = index;
  }

  searchByName(): void {
    this.applicationService.searchByName(this.name)
      .subscribe(
        applications => {
          this.applications = applications;
          this.isWithEnv = false;
          console.log(applications);
        },
        error => {
          console.log(error);
        });
  }

  searchByNameWithEnv(): void {
    this.applicationService.searchByNameWithEnv(this.name)
      .subscribe(
        applications => {
          this.applications = applications;
          this.isWithEnv = true;
          console.log(applications);
        },
        error => {
          console.log(error);
        });
  }
}
