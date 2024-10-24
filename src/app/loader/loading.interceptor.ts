import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LoadingService } from './loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}

  /**
   *
   * Intercept http request and load spinner
   * @returns Observable
   */
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Sometimes we exclude loading spinner
    const excludeLoadingSpinner = request.headers.get('excludeLoadingSpinner');
    if (excludeLoadingSpinner) return next.handle(request);
    this.loadingService.setLoading(true, request.url);
    return next
      .handle(request)
      .pipe(
        catchError((error) => {
          this.loadingService.setLoading(false, request.url);
          // return err;
          return throwError(error);
        })
      )
      .pipe(
        map<HttpEvent<any>, any>((evt: HttpEvent<any>) => {
          if (evt instanceof HttpResponse) {
            this.loadingService.setLoading(false, request.url);
          }
          return evt;
        })
      );
  }
}
