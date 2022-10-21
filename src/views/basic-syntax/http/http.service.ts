import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private http: HttpClient) {}

  public uploadFile(formData: FormData, type: 'single' | 'multiple' = 'single') {
    return this.http.put(`${environment.backend}/file-upload/${type}`, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }

  public echoCode(method: 'get' | 'post' | 'delete' | 'put' | 'patch' = 'get', params: { code: number }) {
    switch (method) {
      case 'get':
      case 'delete':
        return this.http[method](`${environment.backend}/echo-code`, { params });
      case 'patch':
      case 'put':
      case 'post':
        return this.http[method](`${environment.backend}/echo-code`, params);
    }
  }
}
