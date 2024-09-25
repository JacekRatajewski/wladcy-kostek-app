import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LocalstorageService {

  set(key: string, object: any) {
    const transaction = (window as any).db.transaction([key], 'readwrite');
    const store = transaction.objectStore(key);

    store.add(object);
  }

  get(key: string, object: any | any[]): void {
    const transaction = (window as any).db.transaction([key], 'readonly');
    const store = transaction.objectStore(key);

    const request = store.getAll();

    request.onsuccess = function (event: any) {
      object = request.result;
    };
  }
  get$(
    key: string,
    object$: BehaviorSubject<any[] | any>,
    index?: number
  ): void {
    const transaction = (window as any).db.transaction([key], 'readonly');
    const store = transaction.objectStore(key);
    let request: any;
    if (index) {
      request = store.get(index);
    } else {
      request = store.getAll();
    }

    request.onsuccess = function (event: any) {
      object$.next(request.result);
    };
  }
}
