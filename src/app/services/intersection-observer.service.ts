// intersection-observer.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntersectionObserverService {
  observeIntersection(element: HTMLElement, callback: IntersectionObserverCallback) {
    const observer = new IntersectionObserver(callback);
    observer.observe(element);
    return observer;
  }
}
