import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuickBarComponent } from './quick-bar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppsService } from '../../services/apps.service';
import { UiModule } from '@wka/ui';
describe('HomeComponent', () => {
  let component: QuickBarComponent;
  let fixture: ComponentFixture<QuickBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuickBarComponent],
      imports: [HttpClientTestingModule, UiModule],
      providers: [AppsService],
    }).compileComponents();

    fixture = TestBed.createComponent(QuickBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
