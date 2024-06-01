import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { QuickBarComponent } from '../quick-bar/quick-bar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { QuickBarService } from '../../services/quick-bar.service';
import { FeatureFlagsService, UiModule } from '@wka/ui';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, QuickBarComponent],
      imports: [HttpClientTestingModule, UiModule],
      providers: [
        QuickBarService,
        {
          provide: 'featureFlagPath',
          useValue: 'assets/json/feature-flags.json',
        },
        FeatureFlagsService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
