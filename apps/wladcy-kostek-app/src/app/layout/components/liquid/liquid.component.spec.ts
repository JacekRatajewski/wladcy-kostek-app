import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutModule } from '../../layout.module';
import { RouterTestingModule } from '@angular/router/testing';
import { LiquidComponent } from './liquid.component';
describe('LayoutComponent', () => {
  let component: LiquidComponent;
  let fixture: ComponentFixture<LiquidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutModule, RouterTestingModule],
      declarations: [LiquidComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LiquidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
