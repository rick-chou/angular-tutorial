import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private http: HttpClient) {}

  getDailySentence() {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    let url = `${environment.backend}/dailySentence`;
    // if (environment.production) {
    //   url = 'https://sentence.iciba.com/index.php';
    // }
    return this.http.get<{ content: string }>(`${url}?c=dailysentence&m=getdetail&title=${year}-${month}-${day}`);
  }
}
