import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const baseURL = 'https://app-inventory-service.herokuapp.com/v1/applications';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private httpClient: HttpClient) {
  }

  readAll(): Observable<any> {
    return this.httpClient.get(baseURL);
  }

  read(id: any): Observable<any> {
    return this.httpClient.get(`${baseURL}/${id}`);
  }

  create(data: any): Observable<any> {
    const tmpData = {
      name: data.name,
      description: data.description,
      contact: data.contact,
      admins: data.admins.split(','),
      validFrom: data.validFrom

    }
    return this.httpClient.post(baseURL, tmpData);
  }

  update(id: any, data: any): Observable<any> {
    return this.httpClient.patch(`${baseURL}/${id}`, data);
  }

  searchByName(name: any): Observable<any> {
    return this.httpClient.get(`${baseURL}?name=${name}`);
  }

  searchByNameWithEnv(name: any): Observable<any> {
    return this.httpClient.get(`${baseURL}?name=${name}&env=true`);
  }
}
