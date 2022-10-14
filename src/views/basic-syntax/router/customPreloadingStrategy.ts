import { Injectable } from '@angular/core';
import { Route } from '@angular/router';
import { PreloadingStrategy } from '@angular/router';
import { Observable, of } from 'rxjs';

const PRELOADING = true;

@Injectable({
  providedIn: 'root',
})
// CanLoad 会阻塞预加载
export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    if (PRELOADING) {
      return fn();
    }
    return of(null);
  }
}
