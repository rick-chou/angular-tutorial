import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { filter, catchError } from 'rxjs/operators';
import { HttpEvent } from '@angular/common/http';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
      .handle(req)
      .pipe(filter((event) => event instanceof HttpResponse))
      .pipe(
        catchError((error) => {
          console.log('catch error', error);
          return of(error);
        })
      );
  }
}
