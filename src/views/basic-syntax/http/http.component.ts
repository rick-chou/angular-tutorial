import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'http',
  standalone: true,
  templateUrl: './http.component.html',
})
export class HttpComponent implements OnInit {
  constructor(private http: HttpService) {}
  ngOnInit(): void {
    this.http.echoCode('get', { code: 400 }).subscribe(console.log);
    this.http.echoCode('post', { code: 400 }).subscribe(console.log);
    this.http.echoCode('delete', { code: 200 }).subscribe(console.log);
    this.http.echoCode('put', { code: 301 }).subscribe(console.log);
    this.http.echoCode('patch', { code: 500 }).subscribe(console.log);
  }
}
