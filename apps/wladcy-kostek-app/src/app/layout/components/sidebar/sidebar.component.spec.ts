import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';
import { UiModule } from '@wka/ui';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';
import { SettingsDialogComponent } from '../settings-dialog/settings-dialog.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiModule, RouterTestingModule],
      declarations: [SidebarComponent, SettingsDialogComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    component.activeItemId$ = new BehaviorSubject<number>(0)
    fixture.detectChanges();
  });

  it('#constructor: should create', () => {
    expect(component).toBeTruthy();
  });

  it('#onClick: should set activeItemId to clicked item', () => {
    component.onClick(1);

    expect(component.activeItemId$.value).toBe(1);
  });
});
