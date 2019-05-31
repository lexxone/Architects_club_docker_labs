import { Component, OnInit } from '@angular/core';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  title = 'Guid generator';
  count : number = 1;
  guids: string[];

  constructor(private apiService: ApiService){}

  ngOnInit() {
    console.log('The component is initialized');
  }

  getGuid(): void {
    this.apiService.getGuid().subscribe(
      res =>{
      this.guids = [res];
    },
    err => {
      console.log('HTTP Error', err);
      window.alert('api does not exists');
     });
  }

  getGuids(count: number): void {
    this.apiService.getGuids(count).subscribe(
      res =>{
      this.guids = res;
    },
     err => {
      console.log('HTTP Error', err);
      window.alert('api does not exists');
     });
  }
}
