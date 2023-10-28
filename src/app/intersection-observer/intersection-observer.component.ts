// intersection-observer.component.ts
import { Component, Input, OnInit} from '@angular/core';
import { IntersectionObserverService } from '../services/intersection-observer.service';

@Component({
  selector: 'app-intersection-observer',
  template: '<ng-content></ng-content>',
})
export class IntersectionObserverComponent implements OnInit {
   @Input() target: HTMLElement | null;

  private observer: IntersectionObserver | null;

  constructor(private ioService: IntersectionObserverService) {
    this.observer = null;
    this.target = null;
  }

  ngOnInit() {
    if (this.target) {
      this.observer = this.ioService.observeIntersection(this.target, (entries: IntersectionObserverEntry[]) => {
        if (entries[0].isIntersecting) {
          this.target!.style.transform = 'scale(1)';
          (this.observer as IntersectionObserver).unobserve(this.target as Element);
        }
      });
    }
  }
}
