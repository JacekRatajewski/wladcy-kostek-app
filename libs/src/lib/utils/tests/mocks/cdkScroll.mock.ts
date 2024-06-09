import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Subject } from 'rxjs';

export class MockCdkVirtualScrollViewport extends CdkVirtualScrollViewport {
  override scrolledIndexChange: Subject<number> = new Subject<number>();
  override elementScrolled() {
    return new Subject<Event>().asObservable();
  }
  // @ts-ignore: Mock Function.
  override setRenderedRange(): void {
    return;
  }
  // @ts-ignore: Mock Function.
  override getRenderedRange(): any {
    return null;
  }
  // add any other properties and methods that are needed for your test
}
