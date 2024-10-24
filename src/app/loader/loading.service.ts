import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * Loading service
 */
@Injectable({ providedIn: 'root' })
export class LoadingService {
  loadingObservable: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  loadingSub: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loadingMap: Map<string, boolean> = new Map<string, boolean>();

  setLoading(loading: boolean, url: string): void {
    if (!url) {
      throw new Error(
        'The request URL must be provided to the LoadingService.setLoading function'
      );
    }
    if (loading === true) {
      this.loadingMap.set(url, loading);
      this.loadingSub.next(true);
      this.loadingObservable.emit(true);
    } else if (loading === false && this.loadingMap.has(url)) {
      this.loadingMap.delete(url);
    }
    if (this.loadingMap.size === 0) {
      this.loadingObservable.emit(false);
      this.loadingSub.next(false);
    }
  }

  forceClose() {
    this.loadingObservable.emit(false);
    this.loadingSub.next(false);
  }
}
