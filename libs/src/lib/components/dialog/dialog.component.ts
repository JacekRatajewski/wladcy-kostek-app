import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'wka-ui-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent implements OnInit, OnDestroy {
  @ViewChild('dialog') dialog!: ElementRef;
  @Input() size: 'sm' | 'md' | 'lg' = 'sm';
  @Input() hasOutsideClose = false;
  public isOpen$ = new BehaviorSubject<boolean>(false);
  private isOpenSub!: Subscription;

  ngOnInit(): void {
    this.isOpenSub = this.isOpen$.subscribe({
      next: (isOpen: boolean) => {
        const dialog = this.dialog.nativeElement as HTMLDialogElement;
        isOpen ? dialog.showModal() : dialog.close();
      },
    });
  }

  ngOnDestroy(): void {
    this.isOpenSub.unsubscribe();
  }

  public showDialog() {
    this.isOpen$.next(true);
  }

  public hideDialog() {
    this.isOpen$.next(false);
  }

  public closeDialog(event: Event, force = false) {
    if (force) this.hideDialog();
    if (
      this.hasOutsideClose === true &&
      event.target === this.dialog.nativeElement
    )
      this.hideDialog();
  }
}
