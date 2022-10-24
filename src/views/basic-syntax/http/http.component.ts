import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzUploadFile, NzUploadModule } from 'ng-zorro-antd/upload';

@Component({
  selector: 'http',
  standalone: true,
  imports: [NzCardModule, NzUploadModule, NzButtonModule],
  templateUrl: './http.component.html',
})
export class HttpComponent implements OnInit {
  public fileList: NzUploadFile[] = [];

  constructor(private http: HttpService) {}
  ngOnInit(): void {}

  public handleUpload = (file: NzUploadFile, fileList: NzUploadFile[]) => {
    const formData = new FormData();
    formData.append('file', file as unknown as File);
    this.http.uploadFile(formData).subscribe((event) => {
      console.log(event);
    });
    return false;
  };

  public fetchErrorRequest() {
    this.http.echoCode('get', { code: 100 }).subscribe(console.log);
    this.http.echoCode('post', { code: 200 }).subscribe(console.log);
    this.http.echoCode('delete', { code: 301 }).subscribe(console.log);
    this.http.echoCode('put', { code: 403 }).subscribe(console.log);
    this.http.echoCode('patch', { code: 500 }).subscribe(console.log);
  }
}
