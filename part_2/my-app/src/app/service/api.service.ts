import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL: string = 'http://localhost:8080/web/api';
  constructor(private httpClient: HttpClient) { }

  public getGuid(){
    return this.httpClient.get<string>(`${this.apiURL}/guid`);
  }

  public getGuids(count: number){
    return this.httpClient.get<string[]>(`${this.apiURL}/guid/${count}`);
  }
}
